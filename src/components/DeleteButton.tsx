// export default function DeleteButton({ onClick }: { onClick: () => any }) {
//   return (
//     <button onClick={onClick} className="cursor-pointer">
//       ❌
//     </button>
//   );
// }

import { TodoProps } from "../Types/types";

export default function DeleteButton({
  id,
  handleDeleteTodo,
}) {
  return <button onClick={() => handleDeleteTodo(id)}>❌</button>;
}