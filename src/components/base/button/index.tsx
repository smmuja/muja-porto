import { twMerge } from "tailwind-merge";
import { ButtonProps } from "./type";

export function Button(props: ButtonProps) {
  const { children, classname, ...rest } = props;

  return (
    <button
      className={twMerge(
        "rounded-md py-2 px-3 my-3 font-semibold text-sm bg-inherit border border-slate-400 hover:bg-slate-50 ",
        classname
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
