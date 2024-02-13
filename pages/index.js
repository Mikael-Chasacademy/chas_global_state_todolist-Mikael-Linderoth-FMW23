import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "@/redux/todoSlice.js";
import NewTodo from "./Newtodo";

export default function Home() {
  const todoList = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  function handleOnChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit() {
    if (input.trim() !== "") {
      dispatch(
        addTodo({
          id: Date.now(),
          title: input,
          done: false,
        })
      );
      setInput("");
    }
  }

  return (
    <main className={`flex min-h-screen flex-col items-center p-24 `}>
      Hej
      <div className={`flex flex-col items-center`}>
        <h1>Todo List</h1>
        <input value={input} type="text" onChange={handleOnChange} />
        <button onClick={handleSubmit}>add</button>
        <ul>
          {todoList.map((todoObj) => (
            <NewTodo key={todoObj.id} todoObj={todoObj} />
          ))}
        </ul>
      </div>
    </main>
  );
}
