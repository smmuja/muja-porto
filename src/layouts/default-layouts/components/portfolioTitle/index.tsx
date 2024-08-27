import { Card } from "components";

import appleImg from "assets/logo/apple.png";
import { twMerge } from "tailwind-merge";
import { homeUrl } from "config";
import { Link } from "react-router-dom";

export type PortfolioTitleProps = {
  className?: string;
};
export function PortfolioTitle(props: PortfolioTitleProps) {
  const { className } = props;
  return (
    <Link to={homeUrl}>
      <Card
        className={twMerge(
          "border-0 m-0 p-1 flex bg-fuchsia-950 items-center",
          className
        )}
      >
        <img src={appleImg} alt="" className="w-12 sm:hidden" />

        <h2 className="font-extrabold text-xl sm:text-2xl text-stone-200 bg-fuchsia-950">
          Muja Portfolio
        </h2>
      </Card>
    </Link>
  );
}
