import { IconDeviceLaptop } from "@tabler/icons-react";
import { IconLink } from "components";

export function WorkingExperiences() {
  return (
    <IconLink
      link="/work"
      label="Working Experiences"
      children={<IconDeviceLaptop />}
    />
  );
}
