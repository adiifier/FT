import main from "../pictures/entrypage.png";

export function Header({ label }) {
  return (
    <div className="h-[55px] flex justify-center  ">
      <img className="h-20 w-[25%]" src={main}></img>
    </div>
  );
}
