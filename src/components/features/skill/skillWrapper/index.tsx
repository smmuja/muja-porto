import {
  SkillFramework,
  SkillMiscellaneous,
  SkillProgrammming,
  SkillTool,
  SoftSkill,
  Wrapper,
} from "components";
import { SectionTitle } from "layouts";

export function SkillWrapper() {
  return (
    <>
      <SectionTitle title={"# Skills and Tools"} />
      <Wrapper>
        <SkillProgrammming />
        <SkillFramework />
        <SkillTool />
        <SkillMiscellaneous />
        <SoftSkill />
      </Wrapper>
    </>
  );
}
