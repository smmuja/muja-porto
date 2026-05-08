import { createBrowserRouter } from "react-router-dom";
import {
  AboutPage,
  HomePage,
  WorkPage,
  SkillPage,
  EducationPage,
  ContactPage,
  ProjectPage,
  ServicePage,
  Error404Page,
} from "pages";
import { MainLayout, RightSidebarLayout } from "layouts/default-layouts";
import {
  aboutUrl,
  contactUrl,
  educationUrl,
  homeUrl,
  projectUrl,
  serviceUrl,
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
        handle: { title: "About" },
      },
      {
        path: educationUrl,
        Component: EducationPage,
        handle: { title: "Education" },
      },
      {
        path: workUrl,
        Component: WorkPage,
        handle: { title: "Working Experiences" },
      },
      {
        path: skillUrl,
        Component: SkillPage,
        handle: { title: "Skills and Tools" },
      },
      {
        path: contactUrl,
        Component: ContactPage,
        handle: { title: "Contact" },
      },
      {
        path: serviceUrl,
        Component: ServicePage,
        handle: { title: "Services" },
      },
      {
        path: projectUrl,
        Component: ProjectPage,
        handle: { title: "Projects" },
      },
      {
        path: "*",
        Component: Error404Page,
      },
    ],
  },
]);
