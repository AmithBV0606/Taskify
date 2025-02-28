// export default function DeleteButton({ onClick }: { onClick: () => any }) {
//   return (
//     <button onClick={onClick} className="cursor-pointer">
//       ❌
//     </button>
//   );
// }

import { useTodosContext } from "../hooks/useTodosContext";

export default function DeleteButton({ id }: { id: number }) {
  const { handleDeleteTodo } = useTodosContext();

  return <button onClick={() => handleDeleteTodo(id)}>❌</button>;
}