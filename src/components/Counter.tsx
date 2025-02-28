import { useTodosContext } from "../hooks/useTodosContext";

export default function Counter() {
  const { numberOfCompletedTodos, totalNumberOfTodos } = useTodosContext();

  return (
    <p>
      <b className="font-bold">{numberOfCompletedTodos}</b> /{" "}
      {totalNumberOfTodos} tasks completed
    </p>
  );
}