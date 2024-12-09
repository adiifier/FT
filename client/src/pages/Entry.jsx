import { useNavigate } from "react-router-dom";
import main from "../pictures/entrypage.png";

export function Entry() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/Livescores");
  }, 3000);

  return (
    <div className="flex flex-col  items-center justify-center">
      <div className="h-[50%] w-[50%] mt-60 flex flex-col items-center">
        <img className=" " src={main} alt="img"></img>
        <p className="font-light ">Live scores at your fingertips</p>
      </div>
    </div>
  );
}
