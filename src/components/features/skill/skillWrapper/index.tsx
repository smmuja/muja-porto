import { Wrapper } from "components/base";
import { Skills } from "components/features/skill";
import { SectionTitle } from "layouts/default-layouts/components";

export function SkillWrapper() {
  return (
    <>
      <SectionTitle title={"# Skills and Tools"} />
      <Wrapper>
        <Skills />
      </Wrapper>
    </>
  );
}
