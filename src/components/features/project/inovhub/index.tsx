import { Emoji, Icon, ImageModal, SectionCard } from "components";

import backgroundImg from "assets/logo/problem.png";
import solutionImg from "assets/logo/solution.png";
import outputImg from "assets/logo/apple.png";
import techImg from "assets/logo/setting.png";

import inovhubImg from "assets/img/inovhub.png";

export function Inovhub() {
  return (
    <>
      <SectionCard title={""} imgUrl={""}>
        <b>
          <h3 className="font-semibold text-lg">InovHub</h3>
        </b>
        <p>Social media app for enterpreneurs, investors, and customers</p>
        <br />
        <Icon imgSrc={backgroundImg} className="size-14 float-left" />
        <b>
          <p className="italic font-semibold">Background</p>
        </b>
        <p>
          Emerging needs for collaboration between entrepreneurs, investors, and
          customers to foster innovation
        </p>
        <br />
        <Icon imgSrc={solutionImg} className="size-14 float-left" />

        <b>
          <p className="italic font-semibold">Solution</p>
        </b>
        <p>
          Create react application frontend to integrate data from backend with
          user, business, and product endpoints
        </p>
        <br />
        <Icon imgSrc={outputImg} className="size-14 float-left" />
        <b>
          <p className="italic font-semibold">Output</p>
        </b>
        <p>
          Social Networking Platform where entrepreneurs can list their business
          and product for fundings and leads
        </p>
        <br />
        <Icon imgSrc={techImg} className="size-14 float-left" />
        <b>
          <p className="italic font-semibold">Tech</p>
        </b>
        <p>React Js, TypeScript, Axios, React router, Tailwind</p>
        <a
          className="text-blue-800"
          href="https://github.com/smmuja/revou-final-project-frontend"
          target="_blank"
        >
          GitHub Source Code
        </a>
        <br />
        <br />

        <ImageModal imgSrc={inovhubImg}></ImageModal>
        <Emoji />
      </SectionCard>
    </>
  );
}
