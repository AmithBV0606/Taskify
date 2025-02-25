import { useState } from "react";
import DeleteButton from "./DeleteButton";
import { TodoProps } from "../Types/types";

export default function TodoList() {
  const [initialTodos, SetInitialTodos] = useState<TodoProps[]>([
    { id: 1, todo: "Buy groceries", isCompleted: false },
    { id: 2, todo: "Walk the dog", isCompleted: true },
    { id: 3, todo: "Go to Gym", isCompleted: false },
  ]);

  const handleStatusChange = (todo: TodoProps) => {
    // SetInitialTodos(
    //   initialTodos.map((t) =>
    //     t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t
    //   )
    // );
    SetInitialTodos(
      initialTodos.map((t) => {
        if (t.id === todo.id) {
          return { ...t, isCompleted: !t.isCompleted };
        }

        return t;
      })
    );
  };

  const handleDelete = (todo: TodoProps) => {
    SetInitialTodos(initialTodos.filter((t) => t.id !== todo.id));
  };

  return (
    <ul>
      {initialTodos.map((todo: TodoProps) => (
        <li
          className="flex justify-between items-center px-8 h-[50px] text-[14px] border-b border-black/[8%]"
          key={todo.id}
        >
          <span
            className={`cursor-pointer ${
              todo.isCompleted ? "line-through text-[#ccc]" : ""
            }`}
            onClick={() => handleStatusChange(todo)}
          >
            {todo.todo}
          </span>
          <DeleteButton onClick={() => handleDelete(todo)} />

          {/* <button onClick={() => handleDelete(todo)}>❌</button> */}
          
          {/* <DeleteButton id={todo.id} setInitialTodos={SetInitialTodos} /> */}
        </li>
      ))}
    </ul>
  );
}
