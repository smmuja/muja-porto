import { createBrowserRouter } from "react-router-dom";
import { AboutPage, HomePage, Error404 } from "./pages";
import { MainLayout } from "layouts/default-layouts";

export const routes = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "*",
        Component: Error404,
      },
    ],
  },
]);
