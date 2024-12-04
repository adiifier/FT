export function TopNavbar({ l1, l2, l3, l4, l5 }) {
  return (
    <div className=" h-[50px] w-screen bg-telagreen grid grid-cols-[3fr_2fr_2fr_2fr_5fr_4fr]">
      <div className="colspan-1 text-white flex flex-col items-start justify-center pl-10 cursor-pointer text-lg font-bold">
        {l1}
      </div>
      <div className="colspan-1 text-white flex flex-col items-start justify-center pl-3 cursor-pointer">
        {l2}
      </div>
      <div className="colspan-1 text-white flex flex-col items-start justify-center cursor-pointer">
        {l3}
      </div>
      <div className="colspan-1 text-white  flex flex-col items-start justify-center cursor-pointer">
        {l4}
      </div>
      <div className="colspan-1"></div>
      <div className="colspan-1 text-white flex flex-col items-end justify-center pr-10 font-bold text-lg cursor-pointer  border-l-2 border-white text-w ">
        {l5}
      </div>
    </div>
  );
}
