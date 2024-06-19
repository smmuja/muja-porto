import { Card } from "components";
import { PortfolioTitle } from "layouts/default-layouts";

export function HeaderWrapper() {
  return (
    <Card className=" w-full sticky bg-transparent border-0 border-b border-slate-200 mx-0 py-2 ">
      <PortfolioTitle />
    </Card>
  );
}
