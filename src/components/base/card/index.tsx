import { twMerge } from "tailwind-merge";
import { CardProps } from "./type";

export function Card(props: CardProps) {
  const { children, className, ...rest } = props;

  return (
    <div
      className={twMerge(
        "border-2 rounded-sm p-4 mx-0 bg-transparent",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
