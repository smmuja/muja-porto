import { SidebarWrapper } from "layouts/default-layouts";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div className="flex">
      <div>
        <SidebarWrapper />
      </div>
      <div className="p-3">
        <Outlet />
      </div>
    </div>
  );
}
