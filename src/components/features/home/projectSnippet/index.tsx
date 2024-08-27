import { Card, Divider, Icon } from "components/base";

import appleImg from "assets/logo/apple.png";
import collaborationImg from "assets/logo/collaboration.png";
import frontendImg from "assets/logo/frontend.png";
import digitalmarketingImg from "assets/logo/digitalmarketing.png";

import bloggerIMg from "assets/icon/blogger.png";
import cssImg from "assets/icon/css.png";
import figmaImg from "assets/icon/figma.png";
import githubImg from "assets/icon/github.png";
import googleanalyticImg from "assets/icon/google-analytics.png";
import htmlIMg from "assets/icon/html.png";
import javascriptImg from "assets/icon/javascript.png";
import linuxImg from "assets/icon/linux.png";
import pythonImg from "assets/icon/python.png";
import reactImg from "assets/icon/react.png";
import sqlImg from "assets/icon/sql.png";
import typescriptImg from "assets/icon/typescript.png";
import wordpressImg from "assets/icon/wordpress.png";

export function ProjectSnippet() {
  return (
    <Card className="flex border-none m-0 p-0">
      <Divider />
      <div>
        <p>
          Aspiring Software Engineer with background in Product and Digital
          Marketing
        </p>
        <br />
        <Icon imgSrc={appleImg} />
        <Icon imgSrc={collaborationImg} />
        <Icon imgSrc={frontendImg} />
        <Icon imgSrc={digitalmarketingImg} />
        <Icon imgSrc={cssImg} />
        <Icon imgSrc={htmlIMg} />
        <Icon imgSrc={javascriptImg} />
        <Icon imgSrc={typescriptImg} />
        <Icon imgSrc={reactImg} />
        <Icon imgSrc={pythonImg} />
        <Icon imgSrc={sqlImg} />
        <Icon imgSrc={wordpressImg} />
        <Icon imgSrc={bloggerIMg} />
        <Icon imgSrc={linuxImg} />
        <Icon imgSrc={githubImg} />
        <Icon imgSrc={figmaImg} />
        <Icon imgSrc={googleanalyticImg} />
        <br />
        <br />
        <p>
          I am particularly interested in the Front End development to bridge
          between business goals and customers' needs and am eager to contribute
          to this field.
        </p>
        <br />
        <p>View my Project section to learn more 🌟 🌟</p>
      </div>
    </Card>
  );
}
