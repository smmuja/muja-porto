import { Wrapper } from "components/base";
import { Projects } from "components/features/project";
import { SectionTitle } from "layouts";

export function ProjectWrapper() {
  return (
    <>
      <SectionTitle title={"# Project Experiences"} />
      <Wrapper>
        <Projects />
      </Wrapper>
    </>
  );
}
