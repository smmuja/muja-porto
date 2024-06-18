import { ReactNode } from "react";
import { ButtonProps } from "../button/type";

export type DividerProps = ButtonProps & {
  children?: ReactNode;
  dividerClassName?: string;
  buttonClassName?: string;
  lineClassName?: string;
};
