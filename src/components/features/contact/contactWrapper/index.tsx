import { ContactDetail, Wrapper } from "components";
import { SectionTitle } from "layouts";

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
