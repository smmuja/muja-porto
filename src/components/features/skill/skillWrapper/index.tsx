import {
  SkillFramework,
  SkillMiscellaneous,
  SkillProgrammming,
  SkillTool,
  SoftSkill,
  Wrapper,
} from "components";

export function SkillWrapper() {
  return (
    <Wrapper className="">
      <SkillProgrammming />
      <SkillFramework />
      <SkillTool />
      <SkillMiscellaneous />
      <SoftSkill />
    </Wrapper>
  );
}
