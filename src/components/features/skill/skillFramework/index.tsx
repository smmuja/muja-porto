import { Divider, Icon, SectionCard } from "components/base";
import reactImg from "assets/icon/react.png";

export function SkillFramework() {
  return (
    <>
      <SectionCard title={""} imgUrl={""}>
        <h3>
          <b>Framework</b>
        </h3>
        <p>ReactJS, NextJS, Flask </p>
        <Icon imgSrc={reactImg} />
        <Divider />
      </SectionCard>
    </>
  );
}
