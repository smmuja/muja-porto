import { twMerge } from "tailwind-merge";
import { IconProps } from "./type";

export function Icon(props: IconProps) {
  const { imgSrc, className } = props;

  return (
    <img
      src={imgSrc}
      alt=""
      className={twMerge("w-7 m-1 inline-block", className)}
    />
  );
}
