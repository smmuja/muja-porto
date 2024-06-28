import { Card } from "components";
import { PortfolioTitle, SearchBar } from "layouts/default-layouts";

export function HeaderWrapper() {
  return (
    <Card className="sticky m-0 p-0 border-0">
      <PortfolioTitle className="sm:hidden" />

      <Card className=" flex flex-col w-full sticky bg-fuchsia-950 border-0  mx-0 py-2 justify-center items-center content-center mb-0">
        <SearchBar />
      </Card>
    </Card>
  );
}
