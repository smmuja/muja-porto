import { createBrowserRouter } from "react-router-dom";
import { AboutPage, HomePage, Error404 } from "pages";
import { MainLayout } from "layouts/default-layouts";
import { aboutUrl, educationUrl, homeUrl } from "config";
import { EducationPage } from "pages/education";

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
        path: educationUrl,
        Component: EducationPage,
      },
      {
        path: "*",
        Component: Error404,
      },
    ],
  },
]);
