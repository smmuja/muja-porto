import { Emoji, Icon, ImageModal, SectionCard } from "components";

import backgroundImg from "assets/logo/problem.png";
import solutionImg from "assets/logo/solution.png";
import outputImg from "assets/logo/apple.png";
import techImg from "assets/logo/setting.png";

import deardeadlinerImg from "assets/img/deardeadliner.png";

export function DearDeadliner() {
  return (
    <>
      <SectionCard title={""} imgUrl={""}>
        <b>
          <h3 className="font-semibold text-lg">Dear Deadliner Web Blog</h3>
        </b>
        <p>
          Web blog targetting young adults providing motivations about life
          after college
        </p>
        <br />
        <Icon imgSrc={backgroundImg} className="size-14 float-left" />
        <b>
          <p className="italic font-semibold">Background</p>
        </b>
        <p>
          Emerging needs for positive contents for young adults to navigate life
          after college
        </p>
        <br />
        <Icon imgSrc={solutionImg} className="size-14 float-left" />

        <b>
          <p className="italic font-semibold">Solution</p>
        </b>
        <p>
          Create web blog to shae tips and motivations about life after college
        </p>
        <br />
        <Icon imgSrc={outputImg} className="size-14 float-left" />
        <b>
          <p className="italic font-semibold">Output</p>
        </b>
        <p>
          Web blog targetting young adults providing motivations about life
          after college
        </p>
        <br />
        <Icon imgSrc={techImg} className="size-14 float-left" />
        <b>
          <p className="italic font-semibold">Tech</p>
        </b>
        <p>Blogger, HTML, plain CSS</p>
        <a
          className="text-blue-800"
          href="hhttps://www.deardeadliner.com/"
          target="_blank"
        >
          Dear Deadliner
        </a>
        <br />
        <br />

        <ImageModal imgSrc={deardeadlinerImg}></ImageModal>

        <Emoji />
      </SectionCard>
    </>
  );
}
