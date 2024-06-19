import { Button } from "components/base";
import { useState } from "react";

export function Emoji() {
  const [counter, setCounter] = useState(1);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="grid grid-cols-8 gap-3 ">
      <Button
        onClick={handleClick}
        className="flex w-fit rounded-full border gap-1 mt-3 px-2 hover:border-slate-500  active:bg-sky-300"
      >
        <span>❤️</span> <span>{counter}</span>
      </Button>
    </div>
  );
}
