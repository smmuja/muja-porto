import {
  Divider,
  SkillFramework,
  SkillMiscellaneous,
  SkillProgrammming,
  SkillTool,
  SoftSkill,
  Wrapper,
} from "components";

export function SkillWrapper() {
  return (
    <Wrapper>
      <Divider children={"Skills and Tools"} />
      <SkillProgrammming />
      <SkillFramework />
      <SkillTool />
      <SkillMiscellaneous />
      <SoftSkill />
    </Wrapper>
  );
}
