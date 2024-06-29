import { Card } from "components";
import { twMerge } from "tailwind-merge";
import { WrapperProps } from "./type";

export function Wrapper(props: WrapperProps) {
  const { className, children } = props;
  return (
    <>
      <Card
        className={twMerge(
          "border-0 m-0 p-0 overflow-y-scroll h-4/6 ",
          className
        )}
      >
        {children}
      </Card>
    </>
  );
}
