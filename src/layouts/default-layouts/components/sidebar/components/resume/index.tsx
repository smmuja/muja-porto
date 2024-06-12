import { IconReport } from "@tabler/icons-react";
import { IconLink } from "components";

export function Resume() {
  return (
    <IconLink link="/resume" label="CV/Resume" children={<IconReport />} />
  );
}
