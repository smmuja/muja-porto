import { IconUser } from "@tabler/icons-react";
import { IconLink } from "components";

export function About() {
  return <IconLink link="/about" label="About" children={<IconUser />} />;
}
