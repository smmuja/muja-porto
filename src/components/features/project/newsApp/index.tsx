import { Emoji, Icon, ImageModal, SectionCard } from "components";

import backgroundImg from "assets/logo/problem.png";
import solutionImg from "assets/logo/solution.png";
import outputImg from "assets/logo/apple.png";
import techImg from "assets/logo/setting.png";

import newsImg from "assets/img/newsapp.png";

export function NewsApp() {
  return (
    <>
      <SectionCard title={""} imgUrl={""}>
        <b>
          <h3 className="font-semibold text-lg">News App</h3>
        </b>
        <p>News web app to fetch news from NewsAPI</p>
        <br />
        <Icon imgSrc={backgroundImg} className="size-14 float-left" />
        <b>
          <p className="italic font-semibold">Background</p>
        </b>
        <p>Emerging needs for diverse new contents to connect with the world</p>
        <br />
        <Icon imgSrc={solutionImg} className="size-14 float-left" />

        <b>
          <p className="italic font-semibold">Solution</p>
        </b>
        <p>
          Create news web application with react router and authentication to
          improve security and categorization
        </p>
        <br />
        <Icon imgSrc={outputImg} className="size-14 float-left" />
        <b>
          <p className="italic font-semibold">Output</p>
        </b>
        <p>
          News web app where users can get authenticated and filter the news by
          categories, enhancing users experience
        </p>
        <br />
        <Icon imgSrc={techImg} className="size-14 float-left" />
        <b>
          <p className="italic font-semibold">Tech</p>
        </b>
        <p>React Js, TypeScript, Axios, React router, Tailwind, NewsAPI</p>
        <a
          className="text-blue-800"
          href="https://github.com/revou-fsse-3/milestone-2-smmuja"
          target="_blank"
        >
          GitHub Source Code
        </a>
        <br />
        <br />

        <ImageModal imgSrc={newsImg}></ImageModal>

        <Emoji />
      </SectionCard>
    </>
  );
}
