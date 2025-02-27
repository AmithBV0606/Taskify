// export default function DeleteButton({ onClick }: { onClick: () => any }) {
//   return (
//     <button onClick={onClick} className="cursor-pointer">
//       ❌
//     </button>
//   );
// }

import { DeleteButtonProps } from "../Types/types";

export default function DeleteButton({
  id,
  handleDeleteTodo,
}: DeleteButtonProps) {
  return <button onClick={() => handleDeleteTodo(id)}>❌</button>;
}