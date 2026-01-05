import {
  IconBriefcase,
  IconHome,
  IconMail,
  IconReport,
  IconSchool,
  IconTool,
  IconUser,
  IconHandClick,
  IconChecklist,
} from "@tabler/icons-react";
import {
  aboutUrl,
  contactUrl,
  educationUrl,
  homeUrl,
  projectUrl,
  resumeUrl,
  serviceUrl,
  skillUrl,
  workUrl,
} from "config";

export const navPath = [
  {
    title: "Home",
    path: homeUrl,
    icon: IconHome,
  },
  {
    title: "About",
    path: aboutUrl,
    icon: IconUser,
  },
  {
    title: "Service",
    path: serviceUrl,
    icon: IconHandClick,
  },

  {
    title: "Working Experiences",
    path: workUrl,
    icon: IconBriefcase,
  },

  {
    title: "Project Experiences",
    path: projectUrl,
    icon: IconChecklist,
  },
  {
    title: "Skills and Tools",
    path: skillUrl,
    icon: IconTool,
  },
  {
    title: "Education",
    path: educationUrl,
    icon: IconSchool,
  },
  {
    title: "Contact",
    path: contactUrl,
    icon: IconMail,
  },

  {
    title: "CV/Resume",
    path: resumeUrl,
    icon: IconReport,
  },
];
