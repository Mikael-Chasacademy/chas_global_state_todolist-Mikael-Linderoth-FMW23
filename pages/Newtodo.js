import { useDispatch } from "react-redux";
import { removeTodo, toggleDone } from "@/redux/todoSlice.js";

export default function NewTodo({ todoObj }) {
  const dispatch = useDispatch();

  const handleDone = () => {
    dispatch(toggleDone(todoObj.id));
  };

  const handleRemove = () => {
    dispatch(removeTodo(todoObj.id));
  };

  return (
    <li className="lista">
      <button onClick={handleDone}>{todoObj.done ? "Undo" : "Done"}</button>

      <input
        type="text"
        value={todoObj.title}
        style={{ textDecoration: todoObj.done ? "line-through" : "none" }}
        readOnly
      />
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
}
