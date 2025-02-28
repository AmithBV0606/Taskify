import { createContext, useEffect, useState } from "react";
import { TodoProps, TTodosContext } from "../Types/types";
import { TodosContextProviderProps } from "../Types/types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

// Step 1 : Create the Context : Null is shown when a developer has forgoten to wrap the app with the context provider.
export const TodosContext = createContext<TTodosContext | null>(null);

const getInitialTodos = () => {
  const savedTodos = localStorage.getItem("Todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  } else {
    return [];
  }
};

export default function TodosContextProvider({
  children,
}: TodosContextProviderProps) {
  const { isAuthenticated } = useKindeAuth();
  // State

  const [initialTodos, setInitialTodos] =
    useState<TodoProps[]>(getInitialTodos);

  // derived state : derived from the "initialTodos" state
  const totalNumberOfTodos = initialTodos.length;
  const numberOfCompletedTodos = initialTodos.filter(
    (todo) => todo.isCompleted
  ).length;

  // Event handlers / actions
  const handleAddTodo = (todoText: string) => {
    if (initialTodos.length >= 3 && !isAuthenticated) {
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

  // Side Effects :
  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     const response = await fetch("https://bytegrad.com/course-assets/api/todos");
  //     const data = await response.json();
  //     setInitialTodos(data);
  //   }

  //   fetchTodos();
  // }, []);

  // For local storage
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(initialTodos));
  }, [initialTodos]);

  return (
    <TodosContext.Provider
      value={{
        initialTodos,
        numberOfCompletedTodos,
        totalNumberOfTodos,
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

// Step 2 : Make it part of main.tsx app

// Step 3 : Consume the context.
