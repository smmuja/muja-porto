import { RevoU, Wrapper } from "components";
import { UNSEdu } from "components/features";
import { SectionTitle } from "layouts";

export function EducationWrapper() {
  return (
    <>
      <SectionTitle title={"# Education"} />
      <Wrapper>
        <UNSEdu />
        <RevoU />
      </Wrapper>
    </>
  );
}
