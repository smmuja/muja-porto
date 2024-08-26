import { createBrowserRouter } from "react-router-dom";
import {
  AboutPage,
  HomePage,
  WorkPage,
  SkillPage,
  EducationPage,
  ContactPage,
  ProjectPage,
  Error404Page,
} from "pages";
import { MainLayout, RightSidebarLayout } from "layouts/default-layouts";
import {
  aboutUrl,
  contactUrl,
  educationUrl,
  homeUrl,
  projectUrl,
  skillUrl,
  workUrl,
} from "config";

export const routes = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: homeUrl,
        Component: HomePage,
      },
    ],
  },
  {
    Component: RightSidebarLayout,
    children: [
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
        path: projectUrl,
        Component: ProjectPage,
      },
      {
        path: "*",
        Component: Error404Page,
      },
    ],
  },
]);
