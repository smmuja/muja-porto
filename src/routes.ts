import { createBrowserRouter } from "react-router-dom";
import { AboutPage, HomePage, Error404, WorkPage, SkillPage } from "pages";
import { MainLayout } from "layouts/default-layouts";
import {
  aboutUrl,
  contactUrl,
  educationUrl,
  homeUrl,
  skillUrl,
  workUrl,
} from "config";
import { EducationPage } from "pages/education";
import { ContactPage } from "pages/contact";

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
        path: workUrl,
        Component: WorkPage,
      },
      {
        path: skillUrl,
        Component: SkillPage,
      },
      {
        path: contactUrl,
        Component: ContactPage,
      },
      {
        path: "*",
        Component: Error404,
      },
    ],
  },
]);
