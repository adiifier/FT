export function Upcoming({ Date, Details }) {
  return (
    <div className=" rounded text-md font-thin bg-w h-[45px] flex justify-center items-center m-2 ml-4 p-1 pl-2 w-[780px] rounded-xl cursor-pointer ">
      {Details} Date:{Date}
      <hr className=""></hr>
    </div>
  );
}
