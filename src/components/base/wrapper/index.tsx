import { Card } from "components";
import { twMerge } from "tailwind-merge";
import { WrapperProps } from "./type";
import { SectionTitle } from "layouts/default-layouts/components/sectionTitle";

export function Wrapper(props: WrapperProps) {
  const { className, children } = props;
  return (
    <>
      <SectionTitle />
      <Card
        className={twMerge(
          "border-0 m-0 p-0 py-5 overflow-y-scroll h-5/6",
          className
        )}
      >
        {children}
      </Card>
    </>
  );
}
