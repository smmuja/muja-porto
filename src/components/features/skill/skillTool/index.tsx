import { Divider, Icon, SectionCard } from "components/base";
import githubImg from "assets/icon/github.png";
import figmaImg from "assets/icon/figma.png";

export function SkillTool() {
  return (
    <>
      <SectionCard title={""} imgUrl={""}>
        <div className=" border-none gap-5">
          <h3>
            <b>Tools</b>
          </h3>
          <p>Git, Github, Figma, VSCode</p>
          <Icon imgSrc={githubImg} />
          <Icon imgSrc={figmaImg} />
        </div>
        <Divider />
      </SectionCard>
    </>
  );
}
