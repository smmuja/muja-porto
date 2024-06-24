import { HTMLAttributes } from "react";

export type SectionCardProps = HTMLAttributes<HTMLDivElement> & {
  imgSrc?: string | undefined;
  imgUrl: string;
  sectionTitle?: string;
  title: string;
};
