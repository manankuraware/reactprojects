import { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});

  function handleInputChange(val) {
    setInputValue({ id: val, content: val, checked: false });
  }

  //   here i used the submit form via parent ie. onAddTodo to submit form
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ content: "" });
  };
  return (
    <div className="todoform">
      <form action="" onSubmit={handleFormSubmit}>
        <div className="form-elemt">
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue.content}
            onChange={(event) => {
              handleInputChange(event.target.value);
            }}
          />
        </div>
        <div className="todo-submit">
          <button type="submit" className="todo-btn">
            Add task
          </button>
        </div>
      </form>
    </div>
  );
};

// Making Separte form component
