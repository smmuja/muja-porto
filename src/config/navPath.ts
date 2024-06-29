import {
  IconAirBalloon,
  IconDeviceDesktop,
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
    icon: IconDeviceDesktop,
  },
  {
    title: "Project Experiences",
    path: projectUrl,
    icon: IconAirBalloon,
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
