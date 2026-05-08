import { Card } from "components";
import { HeaderWrapper, SidebarWrapper } from "layouts/default-layouts";
import { Outlet } from "react-router-dom";
import { BottomNav } from "../components/bottomNav";
import { Helmet } from "react-helmet-async";

export function MainLayout() {
  const pageTitle = "Muja S | Software Engineering Portfolio";
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="description"
          content="Welcome to my software engineering portfolio! Explore my projects, skills, and experience in web development and software engineering."
        />
      </Helmet>
      <div className="flex flex-col border-0 ">
        <HeaderWrapper />
        <div className="flex border-0">
          <SidebarWrapper />
          <Card className="border-0 p-3 px-0 mx-0 mt-0  min-h-screen max-h-screen w-full">
            <Outlet />
          </Card>
        </div>
        <BottomNav />
      </div>
    </>
  );
}
