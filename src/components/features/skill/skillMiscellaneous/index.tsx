import { Divider, Icon, SectionCard } from "components/base";
import linuxImg from "assets/icon/linux.png";
import bloggerImg from "assets/icon/blogger.png";
import wordpressImg from "assets/icon/wordpress.png";
import googleAnayticImg from "assets/icon/google-analytics.png";

export function SkillMiscellaneous() {
  return (
    <>
      <SectionCard title={""} imgUrl={""}>
        <h3>
          <b>Miscellaneous</b>
        </h3>
        <p>
          Linux, cPanel, Google Analytics, Search Console, Wordpress, Blogger
        </p>
        <Icon imgSrc={bloggerImg} />
        <Icon imgSrc={wordpressImg} />
        <Icon imgSrc={googleAnayticImg} />
        <Icon imgSrc={linuxImg} />
        <Divider />
      </SectionCard>
    </>
  );
}
