import { ButtonProps } from "../Types/types";

export default function Button({ onClick, buttonType, children }: ButtonProps) {
  // const { buttonType, children } = props;

  return (
    <button
      onClick={onClick}
      className={`h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full text-white rounded-[8px] cursor-pointer ${
        buttonType === "secondary" ? "opacity-[85%]" : ""
      }`}
    >
      {children}
    </button>
  );
}