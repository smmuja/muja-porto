import { IconMail } from "@tabler/icons-react";
import { IconLink } from "components";

export function Contact() {
  return <IconLink link="/contact" label="Contact" children={<IconMail />} />;
}
