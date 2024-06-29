import { RevoU, Wrapper } from "components";
import { UNSEdu } from "components/features";
import { SectionTitle } from "layouts";

export function EducationWrapper() {
  return (
    <>
      <SectionTitle title={"# Education"} />
      <Wrapper className="p-0 border-0 mb-0 mx-0">
        <UNSEdu />
        <RevoU />
      </Wrapper>
    </>
  );
}
