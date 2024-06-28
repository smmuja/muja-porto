import { Card } from "components";
import { HeaderWrapper, SidebarWrapper } from "layouts/default-layouts";
import { Outlet } from "react-router-dom";

export function MainLayout() {
  return (
    <div className="flex flex-col border-0">
      <HeaderWrapper />
      <div className="flex border-0">
        <SidebarWrapper />
        <Card className="border-0 p-3 px-0 mx-0 mt-0 min-h-screen max-h-screen w-full">
          <Outlet />
        </Card>
      </div>
    </div>
  );
}
