import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContextProvider";

// Hooks cannot be used inside an "if" block.

export function useTodosContext() {
  const context = useContext(TodosContext);

  if (!context) {
    throw new Error("You forgot to add provider!!");
  }

  return context;
}