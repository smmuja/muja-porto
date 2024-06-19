import userImg from "assets/img/user.png";
import { SectionCardProps } from "./type";

export function SectionCard(props: SectionCardProps) {
  const { children, imgUrl, title, ...rest } = props;

  const imgSrc = imgUrl.length > 0 ? imgUrl : userImg;

  const sectionTitle =
    title?.length > 0 ? title : "Muja - Software Engineer (Front End)";

  return (
    <>
      <div className="flex border-0 mx-0 px-5 py-2 hover:bg-stone-50">
        <>
          <img
            src={imgSrc}
            alt="profile pic"
            className="size-10 rounded-md float-left mr-3"
          />
        </>
        <div>
          <h3 className="font-semibold text-base mb-1">
            {sectionTitle}
            {/* Muja - Software Engineer (Front End) */}
          </h3>
          <div {...rest}>{children}</div>
        </div>
      </div>
    </>
  );
}
