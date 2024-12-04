export function Card({
  MatchHeader,
  T1Logo,
  T2Logo,
  T1Score,
  T2Score,
  Result,
  T1,
  T2,
}) {
  return (
    <div className="h-[150px] w-[240px] bg-w rounded-xl shadow-lg cursor-pointer m-10">
      <div className="text-xs  m-3 pt-1 pl-2">{MatchHeader}</div>

      <div className=" grid grid-cols-[1fr_3fr_3fr]">
        <div className="colspan-1 text-md flex flex-col justify-center items-center">
          <img className="p-1 pl-2" src={T1Logo} alt="r"></img>
        </div>
        <div className="colspan-1 text-md flex flex-col justify-center items-start">
          {T1}
        </div>
        <div className="colspan-1 text-md flex flex-col justify-center items-center">
          {T1Score}
        </div>
      </div>

      <div className=" grid grid-cols-[1fr_3fr_3fr]">
        <div className="colspan-1 text-md flex flex-col justify-center items-center">
          <img className="p-1 pl-2" src={T2Logo} alt="r"></img>
        </div>
        <div className="colspan-1 text-md flex flex-col justify-center items-start">
          {T2}
        </div>
        <div className="colspan-1 text-md flex flex-col justify-center items-center">
          {T2Score}
        </div>
      </div>

      <div className="text-xs flex flex-col items-start justify-center p-1 pl-2">
        {Result}
      </div>

      <div className="bg-grey  h-[35px] rounded-b-xl text-xs  flex  flex-col justify-center items-end pr-3 ">
        Schedule
      </div>
    </div>
  );
}
