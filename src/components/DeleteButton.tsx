export default function DeleteButton({ onClick }: { onClick: () => any }) {
  return (
    <button onClick={onClick} className="cursor-pointer">
      ❌
    </button>
  );
}

// import { TodoProps } from "../Types/types";

// export default function DeleteButton({
//   id,
//   setInitialTodos,
// }: {
//   id: number;
//   setInitialTodos: () => void;
// }) {
//   return (
//     <button
//       onClick={() =>
//         setInitialTodos((prev) => prev.filter((t) => t.id !== id))
//       }
//     >
//       ❌
//     </button>
//   );
// }