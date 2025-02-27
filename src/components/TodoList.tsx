import DeleteButton from "./DeleteButton";
import { TodoListProps, TodoProps } from "../Types/types";

export default function TodoList({ initialTodos, handleToggleTodo, handleDeleteTodo }: TodoListProps) {
  // const [initialTodos, SetInitialTodos] = useState<TodoProps[]>([
  //   { id: 1, todo: "Buy groceries", isCompleted: false },
  //   { id: 2, todo: "Walk the dog", isCompleted: true },
  //   { id: 3, todo: "Go to Gym", isCompleted: false },
  // ]);

  const handleStatusChange = (todo: TodoProps) => {
    // SetInitialTodos(
    //   initialTodos.map((t) =>
    //     t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t
    //   )
    // );
    // setInitialTodos(
    //   initialTodos.map((t) => {
    //     if (t.id === todo.id) {
    //       return { ...t, isCompleted: !t.isCompleted };
    //     }

    //     return t;
    //   })
    // );
    handleToggleTodo(todo.id);
  };

  // const handleDelete = (todo: TodoProps) => {
  //   setInitialTodos(initialTodos.filter((t) => t.id !== todo.id));
  // };

  return (
    <ul>
      {/* Using && instead of ternary is called as "Short-Circuiting" */}
      {initialTodos.length === 0 && (
        <li className="h-full flex justify-center items-center font-bold text-xl">
          Start by adding a task
        </li>
      )}

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
          {/* <DeleteButton onClick={() => handleDelete(todo)} /> */}

          {/* <button onClick={() => handleDelete(todo)}>❌</button> */}

          <DeleteButton id={todo.id} handleDeleteTodo={handleDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}