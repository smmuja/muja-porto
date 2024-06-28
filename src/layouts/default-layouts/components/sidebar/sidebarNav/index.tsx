import { navPath } from "config";
import { IconLink } from "components";
import { PortfolioTitle } from "layouts/default-layouts";

export function SidebarNav() {
  return (
    <>
      <nav className="m-0 border-0 flex flex-col p-3 gap-5 bg-fuchsia-950 text-gray-400 overflow-y-scroll w-20 sm:w-2/5 md:2/5 lg:w-1/5 h-screen max-h-screen ">
        <PortfolioTitle className="hidden sm:inline" />

        {navPath.map((item) => {
          return (
            <>
              <IconLink
                link={item.path}
                label={item.title}
                icon={<item.icon />}
              />
            </>
          );
        })}
      </nav>
    </>
  );
}
