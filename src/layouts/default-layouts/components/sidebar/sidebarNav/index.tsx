import { navPath } from "config";
import { IconLink } from "components";

export function SidebarNav() {
  return (
    <>
      <nav className="flex flex-row sm:flex-col py-3 gap-5 ">
        {navPath.map((item) => {
          return (
            <>
              <IconLink
                key={item.title}
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
