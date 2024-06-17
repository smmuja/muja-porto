import { ReactNode } from "react";
import { CardProps } from "../card/type";

export type WrapperProps = CardProps & {
  children: ReactNode;
};
