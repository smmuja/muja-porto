import { Wrapper } from "components/base";
import { ContactDetail } from "components/features/contact";
import { SectionTitle } from "layouts/default-layouts/components";

export function ContactWrapper() {
  return (
    <>
      <SectionTitle title={"# Contact"} />
      <Wrapper>
        <ContactDetail />
      </Wrapper>
    </>
  );
}
