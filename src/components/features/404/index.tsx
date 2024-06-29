import { IconMail } from "@tabler/icons-react";
import { Wrapper } from "components/base";
import { contactUrl } from "config";
import { Link } from "react-router-dom";

export function Error404() {
  return (
    <Wrapper className="p-3">
      <p>Oops ... </p>
      <p>Nothing here</p>
      <br />
      <Link className="text-blue-700" to={contactUrl}>
        Contact Me <IconMail />
      </Link>
      <span>If anything</span>
      <br />
      <br />
    </Wrapper>
  );
}
