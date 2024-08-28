import { Wrapper } from "components/base";
import { Works } from "components/features//work";
import { SectionTitle } from "layouts/default-layouts/components";

export function WorkWrapper() {
  return (
    <>
      <SectionTitle title={"# Working Experiences"} />
      <Wrapper>
        <Works />
      </Wrapper>
    </>
  );
}
