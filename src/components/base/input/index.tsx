import { twMerge } from "tailwind-merge";
import { InputProps } from "./type";

export function Input(props: InputProps) {
  const {
    label,
    labelClassName,
    containerClassName,
    inputContainerClassName,
    inputClassName,
    rightNode,
    rightNodeClick,
    ...rest
  } = props;
  return (
    <div className={twMerge("space-y-1", containerClassName)}>
      {label && (
        <p className={twMerge("text-sm text-gray-600", labelClassName)}>
          {label}
        </p>
      )}

      <div
        className={twMerge(
          "flex items-center justify-between border gap-2 rounded-md",
          inputContainerClassName
        )}
      >
        <input
          {...rest}
          className={twMerge(
            "w-full bg-inherit outline-none ring-0 grow-1 focus:ring-0 focus:outline-none border-none focus:border-none",
            inputClassName
          )}
        />

        {rightNode && (
          <button type="button" className=" border-0" onClick={rightNodeClick}>
            {rightNode}
          </button>
        )}
      </div>
    </div>
  );
}
