import { Wrapper } from "components/base";
import { Educations } from "components/features/education";
import { SectionTitle } from "layouts/default-layouts/components";

export function EducationWrapper() {
  return (
    <>
      <SectionTitle title={"# Education"} />
      <Wrapper>
        <Educations />
      </Wrapper>
    </>
  );
}
