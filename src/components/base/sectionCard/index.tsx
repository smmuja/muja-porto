import userImg from "assets/img/user.png";
import { SectionCardProps } from "./type";
import { useOpenRightSidebarContext } from "providers/OpenRightSidebarContext";
import { profileData } from "data";

export function SectionCard(props: SectionCardProps) {
  const { children, imgUrl, title, ...rest } = props;

  const { handleOpenRightSidebar } = useOpenRightSidebarContext();

  return (
    <>
      <div
        className="flex border-0 mx-0 my-0
      px-5 py-3 hover:bg-stone-50"
      >
        <>
          <img
            onClick={handleOpenRightSidebar}
            src={imgUrl ? imgUrl : userImg}
            alt="profile pic"
            className="size-10 rounded-md float-left mr-3 hover:cursor-pointer"
          />
        </>
        <div>
          <h3
            onClick={handleOpenRightSidebar}
            className="font-semibold text-base mb-1 hover:cursor-pointer hover:underline"
          >
            {title ? title : `${profileData.name}`}
          </h3>
          <div {...rest}>{children}</div>
        </div>
      </div>
    </>
  );
}
