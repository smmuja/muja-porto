import userImg from "assets/img/user.png";

export function PortfolioTitle() {
  return (
    <div className="flex gap-3 items-center">
      <img src={userImg} alt="Profile pic" className="size-7 rounded-md" />
      <h2 className="font-semibold m-0">Muja Portfolio</h2>
    </div>
  );
}
