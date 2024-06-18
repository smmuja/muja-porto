import { createBrowserRouter } from "react-router-dom";
import { AboutPage, HomePage, Error404 } from "pages";
import { MainLayout } from "layouts/default-layouts";
import { aboutUrl, homeUrl } from "config";

export const routes = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: homeUrl,
        Component: HomePage,
      },
      {
        path: aboutUrl,
        Component: AboutPage,
      },
      {
        path: "*",
        Component: Error404,
      },
    ],
  },
]);
