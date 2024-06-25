import { SectionCard } from "components/base";
import { Emoji } from "components";

import catImgUrl from "assets/img/catCode.png";

export function AboutText() {
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
      <SectionCard title={""} imgUrl={""}>
        🎓 Recently graduated from
        <b> Revou Full Stack Software Engineering </b>
        program
      </SectionCard>
      <SectionCard title={""} imgUrl={catImgUrl}>
        💻 Starting with <b>HTML, CSS, JavaScript</b> trio and diving deep into
        Front-end framework such as <b>ReactJs</b> and <b>NextJs </b>
      </SectionCard>
      <SectionCard title={""} imgUrl={""}>
        🏢 Having fundamental experience in <b>Python, Flask, MySQL </b> for
        Backend, might extend to Backend development as seniority level up
      </SectionCard>
      <SectionCard title={""} imgUrl={catImgUrl}>
        🎯 I am particularly interested in the <b> Front-end</b> development
        tobridge between business goals and customers' needs and am eager to
        contribute to this field.
      </SectionCard>
    </>
  );
}
