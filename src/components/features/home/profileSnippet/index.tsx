import userImg from "assets/img/user.png";
import { Card } from "components/base";

export function ProfileSnippet() {
  return (
    <Card className="flex gap-3 items-center border-none">
      <img src={userImg} alt="profile pic" className="size-20 rounded-md" />

      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <h3 className="font-semibold">Muja (Me)</h3>{" "}
          <span className="text-slate-500 text-xs">o</span>
        </div>
        <div>
          <p>Software Engineering Associate</p>
        </div>
      </div>
    </Card>
  );
}
