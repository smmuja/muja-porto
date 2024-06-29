import {
  AboutSnippet,
  ButtonViewAbout,
  Card,
  Emoji,
  ProfileSnippet,
} from "components";

import userImg from "assets/img/user.png";

export function RightSidebar() {
  return (
    <Card className="border-0 hidden flex-col w-full overflow-hidden">
      <div className="flex gap-3">
        <img src={userImg} alt="" className="size-7 rounded-md" />
        <h3 className="font-semibold m-0 text-lg">Muja Portfolio</h3>
      </div>

      <Card className="m-5 p- border-0">
        <ProfileSnippet />
        <AboutSnippet />
        <Emoji />
        <ButtonViewAbout />
      </Card>
    </Card>
  );
}
