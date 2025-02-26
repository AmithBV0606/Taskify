import { useState } from "react";
import Button from "./Button";

export default function AddTodoForm({ initialTodos, handleAddTodo }) {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (initialTodos.length >= 3) {
    //   alert("Login to add more Tasks!!");
    //   return;
    // } else {
    //   setInitialTodos((prev) => [
    //     ...prev,
    //     { id: prev.length + 1, todo: todoText, isCompleted: false },
    //   ]);
    // }

    if (todoText === "") {
      alert("Cannot add an EMPTY Task, please add a valid task!");
      return;
    } else {
      handleAddTodo(todoText);
    }

    setTodoText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-medium text-[#231d15]">Add a task</h2>
      <input
        type="text"
        className="h-[45px] border border-black/30 rounded-[5px] my-[9px] text-[14px] block w-full px-[16px] outline-none"
        // Controlled Input
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <Button>Add to list</Button>
    </form>
  );
}
