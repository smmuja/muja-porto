import userImg from "assets/img/user.png";
import { Card, Divider } from "components";
import { twMerge } from "tailwind-merge";

export type SectionTitleProp = {
  className?: string;
};

export function SectionTitle(props: SectionTitleProp) {
  const { className } = props;
  return (
    <>
      <Card className=" flex gap-3 items-center mx-0 m-0 px-3 py-0 border-0 w-full h-10">
        <img
          src={userImg}
          alt="Profile pic"
          className={twMerge("size-7 rounded-md", className)}
        />
        <h2 className="font-semibold m-0">Muja Portfolio</h2>
      </Card>
      <Divider />
    </>
  );
}
