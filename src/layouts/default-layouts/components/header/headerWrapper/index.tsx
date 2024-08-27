import { Card, Hamburger, NavArrow } from "components";
import { PortfolioTitle, SearchBar } from "layouts/default-layouts";

export function HeaderWrapper() {
  return (
    <Card className=" z-10 top-0  m-0 p-0 border-0 bg-fuchsia-950 flex flex-col">
      <Card className="sm:hidden z-10 py-1 md:py-3 flex flex-row border-0 justify-between content-between">
        <PortfolioTitle className="sm:hidden" />
        <Hamburger />
      </Card>

      <Card className="relative z-0 flex flex-row gap-3 w-full bg-fuchsia-950 border-0 mx-0 py-0 md:py-2 justify-center items-center content-center mb-0">
        <NavArrow />
        <SearchBar />
      </Card>
    </Card>
  );
}
