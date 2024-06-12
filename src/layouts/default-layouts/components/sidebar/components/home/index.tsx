import { IconHome } from "@tabler/icons-react";
import { IconLink } from "components";

export function Home() {
  return <IconLink link="/" label="Home" children={<IconHome />} />;
}
