import AddTodoForm from "./AddTodoForm";
import Button from "./Button";
import { handleAddTodoType } from "../Types/types";

export default function Sidebar({ handleAddTodo }: handleAddTodoType) {
  return (
    <section className="col-[2/3] row-[2/3] bg-[#fffcf2] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px] flex flex-col">
      <AddTodoForm handleAddTodo={handleAddTodo} />

      <div className="mt-auto space-y-2">
        <Button buttonType="secondary">Log In</Button>
        <Button buttonType="secondary">Register</Button>
      </div>
    </section>
  );
}