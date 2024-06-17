import { Card } from "components";
import { HeaderWrapper, SidebarWrapper } from "layouts/default-layouts";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div className="flex">
      <SidebarWrapper />
      <Card className="p-3 min-h-screen max-h-screen w-full">
        <HeaderWrapper />
        <Outlet />
      </Card>
    </div>
  );
}
