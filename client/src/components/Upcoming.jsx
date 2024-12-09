import { useNavigate } from "react-router-dom";

export function Upcoming({ Date, Details }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/upcoming");
      }}
      className=" rounded text-md font-thin bg-w h-[45px] flex justify-center items-center m-2 ml-4 p-1 pl-2 w-[780px] rounded-xl cursor-pointer "
    >
      {Details} Date:{Date}
      <hr className=""></hr>
    </div>
  );
}
