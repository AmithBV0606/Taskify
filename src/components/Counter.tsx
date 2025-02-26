export default function Counter({ initialTodos }) {
  return (
    <p>
      <b className="font-bold">
        {initialTodos.reduce(
          (acc, todo) => acc + (todo.isCompleted ? 1 : 0),
          0
        )}
      </b>{" "}
      / {initialTodos.length} tasks completed
    </p>
  );
}