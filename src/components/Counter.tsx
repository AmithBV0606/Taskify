import { DerivedStateProps } from "../Types/types";


export default function Counter({
  totalNumberOfTodos,
  numberOfCompletedTodos,
}: DerivedStateProps) {
  return (
    <p>
      <b className="font-bold">{numberOfCompletedTodos}</b> /{" "}
      {totalNumberOfTodos} tasks completed
    </p>
  );
}