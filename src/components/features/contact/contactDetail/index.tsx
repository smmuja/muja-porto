import { Divider, Icon, ImageModal, SectionCard } from "components";

import catImg from "assets/img/catCode.png";

import gmailImg from "assets/icon/gmail.png";
import linkeinImg from "assets/icon/linkedin.png";

export function ContactDetail() {
  return (
    <>
      <Divider children={"Contact Details"} />
      <SectionCard title={""} imgUrl={""}>
        <p>
          <b>Thank you</b> for reaching until this far
        </p>
        <br />
        <p>Let's connect and 🌟 collaborate 🌟</p>
        <p className="mb-5">I can be reached out via one of these platform</p>
        <Icon imgSrc={gmailImg} />
        <a
          href="mailto:smmuja27@gmail.com"
          className="gap-3 text-blue-800"
          target="_blank"
        >
          smmuja27@gmail.com
        </a>
        <br />
        <Icon imgSrc={linkeinImg} />
        <a
          className="text-blue-800"
          href="https://linkedin.com/in/smmuja/"
          target="_blank"
        >
          /in/smmuja
        </a>

        <ImageModal imgSrc={catImg}></ImageModal>
      </SectionCard>
    </>
  );
}
