import { Card } from "components";
import {
  BottomNav,
  HeaderWrapper,
  RightSidebar,
  Seo,
  SidebarWrapper,
} from "layouts/default-layouts";
import { Outlet, UIMatch, useMatches } from "react-router-dom";

// Define the exact shape of route handle
interface RouteHandle {
  title: string;
}

export function RightSidebarLayout() {
  // Pass the type to useMatches so every match is strictly typed
  const matches = useMatches() as UIMatch<unknown, RouteHandle>[];

  // Get title from the active route's handle
  const currentMatch = matches.find((m) => m.handle?.title);
  const pageTitle = currentMatch?.handle?.title || "Portfolio";

  return (
    <>
      <Seo
        title={`${pageTitle} - Muja S | Software Engineering Portfolio`}
        // description={`Welcome to my software engineering portfolio! Explore my ${pageTitle.toLowerCase()} in web development and software engineering.`}
      />
      <div className="flex flex-col border-0 ">
        <HeaderWrapper />
        <div className="flex border-0">
          <SidebarWrapper />
          <Card className=" border-0 p-3 px-0 mx-0 mt-0  min-h-screen max-h-screen w-full">
            <Outlet />
          </Card>

          <RightSidebar />
        </div>
        <BottomNav />
      </div>
    </>
  );
}
