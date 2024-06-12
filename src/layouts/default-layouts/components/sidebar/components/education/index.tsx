import { IconSchool } from "@tabler/icons-react";
import { IconLink } from "components";

export function Education() {
  return (
    <IconLink link="/education" label="Education" children={<IconSchool />} />
  );
}
