import { IconLink } from "components";
import { navPath } from "config/navPath";

export function BottomNav() {
  return (
    <nav className="sm:hidden flex sticky bottom-0 gap-0 px-0 py-3 border-t text-center justify-center items-center  content-center overflow-x-scroll bg-white">
      {navPath.map((item) => {
        return (
          <>
            <IconLink key={item.title} link={item.path} icon={<item.icon />} />
          </>
        );
      })}
    </nav>
  );
}
