import { ButtonProps } from "../Types/types";

export default function Button({ buttonType, children }: ButtonProps) {
  // const { buttonType, children } = props;

  return (
    <button
      className={`h-[45px] bg-[#473a2b] hover:bg-[#322618] w-full text-white rounded-[5px] cursor-pointer ${
        buttonType === "secondary" ? "opacity-[85%]" : ""
      }`}
    >
      {children}
    </button>
  );
}