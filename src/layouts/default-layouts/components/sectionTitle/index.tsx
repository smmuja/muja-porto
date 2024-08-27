import { Card, Divider } from "components";
import { twMerge } from "tailwind-merge";

export type SectionTitleProp = {
  className?: string;
  imgClassName?: string;
  imgSrc?: string;
  title: string;
};

export function SectionTitle(props: SectionTitleProp) {
  const { className, imgClassName, imgSrc, title } = props;

  return (
    <>
      <Card
        className={twMerge(
          "flex gap-3 items-center mx-0 m-0 px-3 py-0 border-0 w-full h-7 ",
          className
        )}
      >
        {imgSrc && (
          <img
            src={imgSrc}
            alt="Profile pic"
            className={twMerge("size-7 rounded-md", imgClassName)}
          />
        )}

        <h2 className="font-semibold m-0 text-lg">{title}</h2>
      </Card>
      <Divider />
    </>
  );
}
