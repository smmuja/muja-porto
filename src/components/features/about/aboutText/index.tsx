import { SectionCard } from "components/base";
import { Emoji } from "components";

import catImgUrl from "assets/img/catCode.png";

export function AboutTry() {
  return (
    <>
      <SectionCard imgUrl={""} title={""}>
        <div>
          👀 Having more than one year of experience in the digital products and
          customer interaction in <b>web hosting</b> industry.
        </div>

        <Emoji />
      </SectionCard>
      <SectionCard imgUrl={catImgUrl} title={""}>
        <div>
          🌐 Skilled in <b>Search Engine Optimization (SEO)</b> , keyword
          research, website content planning, and ads targeting. Familiar with
          SEO tools and Social Media Ads dashboard.
        </div>

        <Emoji />
      </SectionCard>
      <SectionCard imgUrl={""} title={""}>
        <ul className="flex flex-col list-none gap-5">
          <li>
            🎓 Recently graduated from
            <b> Revou Full Stack Software Engineering </b>
            program
          </li>
          <li>
            💻 Starting with <b>HTML, CSS, JavaScript</b> trio and diving deep
            into Front-end framework such as <b>ReactJs</b> and <b>NextJs </b>
          </li>
          <li>
            🏢 Having fundamental experience in <b>Python, Flask, MySQL </b> for
            Backend, might extend to Backend development as seniority level up
          </li>
          <li>
            🎯 I am particularly interested in the <b> Front-end</b> development
            to bridge between business goals and customers' needs and am eager
            to contribute to this field.
          </li>
        </ul>
      </SectionCard>
    </>
  );
}
