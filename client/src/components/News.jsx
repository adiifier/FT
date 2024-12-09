import { useNavigate } from "react-router-dom";

export function News({ Heading, Content }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/news");
      }}
      className="flex flex-col m-2 mt-3 cursor-pointer"
    >
      <div className="text-md font-bold bg-white flex flex-col justify-center items-start ">
        {Heading}
      </div>
      <div className="text-sm font-light p-1">{Content}</div>
    </div>
  );
}
