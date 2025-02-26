import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TodoList from "./components/TodoList";
import { TodoProps } from "./Types/types";

function App() {
  const [initialTodos, SetInitialTodos] = useState<TodoProps[]>([
    { id: 1, todo: "Buy groceries", isCompleted: false },
    { id: 2, todo: "Walk the dog", isCompleted: false },
    { id: 3, todo: "Go to Gym", isCompleted: false },
  ]);

  return (
    <div className="flex flex-col justify-center items-center font-sans bg-[#f1d4b3] min-h-screen">
      <BackgroundHeading />

      <main className="bg-white w-[972px] h-[636px] relative rounded-md shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
        <Header initialTodos={initialTodos} />

        <TodoList initialTodos={initialTodos} SetInitialTodos={SetInitialTodos} />

        <Sidebar />
      </main>

      <Footer />
    </div>
  );
}

export default App;
