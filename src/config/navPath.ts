import {
  IconDeviceLaptop,
  IconFocus2,
  IconHome,
  IconMail,
  IconReport,
  IconSchool,
  IconTool,
  IconUser,
} from "@tabler/icons-react";
import {
  aboutUrl,
  contactUrl,
  educationUrl,
  homeUrl,
  projectUrl,
  resumeUrl,
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
    title: "Education",
    path: educationUrl,
    icon: IconSchool,
  },
  {
    title: "Working Experiences",
    path: workUrl,
    icon: IconDeviceLaptop,
  },
  {
    title: "Project Experiences",
    path: projectUrl,
    icon: IconFocus2,
  },
  {
    title: "Skills and Tools",
    path: skillUrl,
    icon: IconTool,
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
