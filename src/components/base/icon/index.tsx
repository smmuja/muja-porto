import { twMerge } from "tailwind-merge";
import { IconProps } from "./type";

export function Icon(props: IconProps) {
  const { imgSrc, className, tooltip } = props;

  return (
    <img
      src={imgSrc}
      alt={tooltip}
      title={tooltip}
      className={twMerge("w-7 m-1 inline-block", className)}
    />
  );
}
