import { Wrapper } from "components/base";
import { Services } from "components/features/services";
import { SectionTitle } from "layouts/default-layouts/components";

export function ServiceWrapper() {
  return (
    <>
      <SectionTitle title={"# Services"} />
      <Wrapper>
        <Services />
      </Wrapper>
    </>
  );
}
