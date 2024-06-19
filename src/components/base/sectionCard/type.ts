import { HTMLAttributes } from "react";

export type SectionCardProps = HTMLAttributes<HTMLDivElement> & {
  imgUrl: string;
  sectionTitle?: string;
  title: string;
};
