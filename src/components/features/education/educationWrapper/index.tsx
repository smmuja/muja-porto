import { EduHead, RevoU, Wrapper } from "components";
import { UNSEdu } from "components/features";

export function EducationWrapper() {
  return (
    <>
      <Wrapper className="p-0 border-0 mb-0 mx-0">
        <EduHead />
        <UNSEdu />
        <RevoU />
      </Wrapper>
    </>
  );
}
