import { PortfolioTitle, SidebarNav } from "layouts/default-layouts";

export function SidebarWrapper() {
  return (
    <div className="hidden sm:flex  flex-col m-0 p-3 border-0 bg-fuchsia-950 text-gray-400  overflow-y-scroll w-20 sm:w-2/5 md:2/5 lg:w-1/5 ">
      <PortfolioTitle className="hidden sm:inline" />
      <SidebarNav />
    </div>
  );
}
