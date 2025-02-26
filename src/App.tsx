import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";
import { TodoProps } from "./Types/types";

function App() {
  // State
  const [initialTodos, setInitialTodos] = useState<TodoProps[]>([]);

  // derived state : derived from the "initialTodos" state
  const totalNumberOfTodos = initialTodos.length;
  const numberOfCompletedTodos = initialTodos.filter(
    (todo) => todo.isCompleted
  ).length;

  // Event handlers / actions
  const handleAddTodo = (todoText: string) => {
    if (initialTodos.length >= 3) {
      alert("Login to add more Tasks!!");
      return;
    } else {
      setInitialTodos((prev) => [
        ...prev,
        { id: prev.length + 1, todo: todoText, isCompleted: false },
      ]);
    }
  };

  const handleToggleTodo = (id: number) => {
    setInitialTodos(
      initialTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }

        return todo;
      })
    );
  };

  const handleDeleteTodo = (id: number) => {
    setInitialTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col justify-center items-center font-sans bg-[#f1d4b3] min-h-screen">
      <BackgroundHeading />

      <main className="bg-white w-[972px] h-[636px] relative rounded-md shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header
          totalNumberOfTodos={totalNumberOfTodos}
          numberOfCompletedTodos={numberOfCompletedTodos}
        />

        <TodoList
          initialTodos={initialTodos}
          handleToggleTodo={handleToggleTodo}
          handleDeleteTodo={handleDeleteTodo}
        />

        <Sidebar handleAddTodo={handleAddTodo} />
      </main>

      <Footer />
    </div>
  );
}

export default App;