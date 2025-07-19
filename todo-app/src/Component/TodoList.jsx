export const TodoList = ({
  data,
  onhandleDeleteTodo,
  checked,
  onhandleCheckedTodo,
}) => {
  return (
    <li>
      <span className={checked ? "ckeck" : "unchecked"}>{data}</span>
      <button
        className="Checkbtn"
        onClick={() => {
          onhandleCheckedTodo(data);
        }}
      >
        Check
      </button>
      <button
        className="deletebtn"
        onClick={() => {
          onhandleDeleteTodo(data);
        }}
      >
        delete
      </button>
    </li>
  );
};
