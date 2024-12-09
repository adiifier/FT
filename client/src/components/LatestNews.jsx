import { useNavigate } from "react-router-dom";
import { News } from "./News";

export function LatestNews() {
  const navigate = useNavigate();
  return (
    <div className="bg-w h-[560px]">
      <div
        onClick={() => {
          navigate("/news");
        }}
        className=" cursor-pointer text-xl font-black text-green m-2 p-2 pl-4 flex flex-col items-start justify-center"
      >
        Latest news
      </div>
      <div className="bg-white m-2 p-2 mt-3 rounded-xl">
        <News
          Heading={"India Clinches Nail-Biter Against Pakistan"}
          Content={
            "In a high-stakes thriller, India chased down 320 runs in the last over, securing a historic win. Captain Rohit Sharma led from the front with a blistering century..."
          }
        ></News>
      </div>

      <div className="bg-white m-2 p-2 mt-3 rounded-xl">
        <News
          Heading={"Rain Disrupts World Cup Final"}
          Content={
            "The much-anticipated World Cup final was halted due to persistent rain. Both teams are set to resume the match on the reserve day...."
          }
        ></News>
      </div>

      <div className="bg-white m-2 p-2 mt-3 rounded-xl">
        <News
          Heading={"Young Sensation Breaks Records"}
          Content={
            "At just 19, Arjun Verma scored a breathtaking 200 in his debut match, becoming the youngest cricketer to achieve this milestone...."
          }
        ></News>
      </div>

      <div className="bg-white m-2 p-2 mt-3 rounded-xl">
        <News
          Heading={"Australia Announces Squad for Ashes"}
          Content={
            "Australia has named a strong 16-player squad for the upcoming Ashes series, featuring key players like Steve Smith and Pat Cummins...."
          }
        ></News>
      </div>
    </div>
  );
}
