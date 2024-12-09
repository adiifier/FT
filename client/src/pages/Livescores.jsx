import { Result } from "postcss";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { TopNavbar } from "../components/TopNavbar";
import flg from "../pictures/flags/indflg.svg";
import flg2 from "../pictures/flags/pak.svg";
import { LatestNews } from "../components/LatestNews";
import sgle from "../pictures/flags/agle.svg";
import { Upcoming } from "../components/Upcoming";

export function Livescores() {
  return (
    <div>
      <div>
        <Header label={""}></Header>;
      </div>

      <div>
        <TopNavbar
          l1={"Current Matches"}
          l2={"About"}
          l3={"Statistics"}
          l4={"Login"}
          l5={"Create Your Scorecard"}
        ></TopNavbar>
      </div>

      <div className="grid grid-cols-[5fr_3fr]">
        {/* //cards */}
        <div className="h-[230px] colspan-1 grid  grid-[2fr_2fr] ">
          <div className=" colspan-1 flex items-center justify-evenly">
            <Card
              MatchHeader={"24th Match IPL (T20)"}
              T1Logo={flg}
              T2Logo={flg2}
              T1Score={"131-4 (12.4)"}
              T2Score={"111-2 (19.5)"}
              Result={"Ind Need 54 runs "}
              T1={"IND"}
              T2={"PAK"}
            ></Card>
            <Card
              MatchHeader={"1st ODI Ind vs Aus)"}
              T1Logo={flg}
              T2Logo={flg2}
              T1Score={"312-4 (50)"}
              T2Score={"297 (49.5)"}
              Result={"Ind won by 15 runs "}
              T1={"IND"}
              T2={"PAK"}
            ></Card>
            <Card
              MatchHeader={"12th Match Leg-2 EPL"}
              T1Logo={flg}
              T2Logo={flg2}
              T1Score={"2"}
              T2Score={"1"}
              Result={"Full time - India won the match "}
              T1={"IND"}
              T2={"PAK"}
            ></Card>
            <img
              className="h-[30px] w-[27px] mr-1 pr-1"
              src={sgle}
              alt="more"
            ></img>
          </div>
          <div className=" colspan-1 w-[400px]">
            <TopNavbar
              className="cursor-none"
              l1={"Upcoming Matches"}
            ></TopNavbar>
            <div className="m-2  flex flex-col justify-center items-center">
              <Upcoming
                Details={"IND Vs NZ (Mumbai , Wankhede stadium) "}
                Date={"14 OCT 3034"}
              ></Upcoming>
            </div>
            <div className="m-2  flex flex-col justify-center items-center">
              <Upcoming
                Details={"IND  VS  PAK  (Chennai , MCA stadium) "}
                Date={"10 OCT 3034"}
              ></Upcoming>
            </div>
            <div className="m-2  flex flex-col justify-center items-center">
              <Upcoming
                Details={"AUS Vs NZ (Perth , Optus stadium) "}
                Date={"10 OCT 3034"}
              ></Upcoming>
            </div>
            <div className="m-2  flex flex-col justify-center items-center">
              <Upcoming
                Details={"ZIM VS PAK (Rawalpindi, TC stadium) "}
                Date={"12 OCT 2024"}
              ></Upcoming>
            </div>
          </div>
        </div>

        {/* //latest news */}
        <div className="colspan-1">
          <div className="">
            <LatestNews></LatestNews>
          </div>
        </div>
      </div>
    </div>
  );
}
