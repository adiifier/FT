export function News({ Heading, Content }) {
  return (
    <div className="flex flex-col m-2 mt-3 cursor-pointer">
      <div className="text-md font-bold bg-white flex flex-col justify-center items-start ">
        {Heading}
      </div>
      <div className="text-sm font-light p-1">{Content}</div>
    </div>
  );
}
