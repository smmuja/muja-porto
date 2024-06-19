import { Button } from "components";
import { DividerProps } from "./type";
import { twMerge } from "tailwind-merge";

export function Divider(props: DividerProps) {
  const {
    children,
    onClick,
    dividerClassName,
    buttonClassName,
    lineClassName,
  } = props;
  return (
    <div
      className={twMerge(
        "flex content-center items-center my-3 py-3 mx-0",
        dividerClassName
      )}
    >
      <hr
        className={twMerge(
          "flex-1 border-none h-px bg-slate-200",
          lineClassName
        )}
      />
      {children && (
        <Button
          onClick={onClick}
          className={twMerge(
            "flex  gap-3 border rounded-2xl px-3 size-fit font-lato text-sm font-semibold",
            buttonClassName
          )}
        >
          {children}
        </Button>
      )}

      <hr
        className="flex-1 border-none h-px
      bg-slate-200"
      />
    </div>
  );
}
