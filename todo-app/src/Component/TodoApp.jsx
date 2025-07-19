import "./todo.css";

import { useEffect, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

export default function TodoApp() {
  const [task, setTask] = useState(() => {
    const reactTodos = localStorage.getItem("reactTodo");
    if (!reactTodos) return [];
    return JSON.parse(reactTodos);
  });
  const [dateTime, setDateTime] = useState("");

  // localStorage todo
  localStorage.setItem("reactTodo", JSON.stringify(task));

  // to delete elemet from array task
  function handleDeleteTodo(value) {
    // console.log(value);
    const updatedTask = task.filter((curTask) => {
      // with curly braces and an explicit return:
      return curTask.content !== value;
    });
    setTask(updatedTask);
  }

  function handleDeleteAll() {
    setTask([]);
  }

  // check todo functionlity
  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else return curTask;
    });
    setTask(updatedTask);
  };

  function handleFormSubmit(inputValue) {
    const { id, content, checked } = inputValue;

    // avoid adding empty sting to array
    if (!content) return;

    // check if value already entered, if yes then avoid it
    // if (task.includes(inputValue)) return;
    const ifTodoContentMatched = task.find((curTask) => {
      curTask.content === content;
    });

    if (ifTodoContentMatched) return;

    // setTask((prevTask) => [...prevTask, inputValue]);
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  }

  // date
  // setInterval har 1 second me time update karta hai.

  // useEffect ensures it runs once (on mount), then cleans up on unmount.
  useEffect(() => {
    const myInterval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} And ${formattedTime}`);
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <section className="todo-container">
      <h1>Todo List</h1>
      <div className="date-wrapper">{dateTime}</div>

      {/* created Seprate Form Component, passed formsubmit fn as prop  */}
      <TodoForm onAddTodo={handleFormSubmit} />
      <ol className="myformdata">
        {task.map((curTask) => {
          // Don't try to access key inside child components.
          // Instead, pass it as a normal prop like id={todo.id} if needed.
          return (
            <TodoList
              key={curTask.id}
              data={curTask.content}
              checked={curTask.checked}
              onhandleCheckedTodo={handleCheckedTodo}
              onhandleDeleteTodo={handleDeleteTodo}
            />
          );
        })}
      </ol>
      <button className="deleteall" onClick={handleDeleteAll}>
        Delete All
      </button>
    </section>
  );
}
