export default function Header() {
  return (
    <header className="col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.08]">
        <div className="flex justify-start items-center h-full ml-8 gap-[5px]">
            <div className="w-5 h-5 bg-gray-500/50 rounded-full cursor-pointer"></div>
            <div className="w-5 h-5 bg-gray-500/60 rounded-full cursor-pointer"></div>
            <div className="w-5 h-5 bg-gray-500/70 rounded-full cursor-pointer"></div>
        </div>
    </header>
  );
}