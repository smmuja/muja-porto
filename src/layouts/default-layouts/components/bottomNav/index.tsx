import { IconLink } from "components";
import { navPath } from "config/navPath";

export function BottomNav() {
  return (
    <nav className="sm:hidden flex sticky bottom-0 gap-0  border-t justify-center overflow-x-scroll bg-white">
      {navPath.map((item) => {
        return (
          <>
            <IconLink link={item.path} icon={<item.icon />} />
          </>
        );
      })}
    </nav>
  );
}
