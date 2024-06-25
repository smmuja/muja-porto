import { Divider, Icon, SectionCard } from "components/base";
import javascriptImg from "assets/icon/javascript.png";
import typescriptImg from "assets/icon/typescript.png";
import cssImg from "assets/icon/css.png";
import htmlImg from "assets/icon/html.png";
import pythonImg from "assets/icon/python.png";
import sqlImg from "assets/icon/sql.png";

export function SkillProgrammming() {
  return (
    <>
      <SectionCard title={""} imgUrl={""}>
        <h3>
          <b>Programming Languages</b>
        </h3>

        <p>JavaScript, TypeScript, CSS, Tailwind CSS, SQL Query, Python</p>
        <Icon imgSrc={javascriptImg} />
        <Icon imgSrc={typescriptImg} />
        <Icon imgSrc={htmlImg} />
        <Icon imgSrc={cssImg} />
        <Icon imgSrc={sqlImg} />
        <Icon imgSrc={pythonImg} />
        <Divider />
      </SectionCard>
    </>
  );
}
