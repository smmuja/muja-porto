import { Divider, Icon, ImageModal, SectionCard } from "components";

import niagahosterImg from "assets/logo/niagahoster.png";
import hostingerImg from "assets/logo/hostinger.png";
import catImg from "assets/img/catCode.png";

export function Niagahoster() {
  return (
    <>
      <Divider children={"Working Experience"} />
      <SectionCard title={""} imgUrl={""}>
        <Icon imgSrc={niagahosterImg} />
        <Icon imgSrc={hostingerImg} />
        <b>
          <h3 className="font-semibold">Niagahoster/Hostinger</h3>
        </b>
        <b>
          <p className="italic font-semibold">
            Sr. Customer Success Specialist
          </p>
        </b>
        <p>Yogyakarta/Lithuania (Remote)</p>
        <p>Aug 2022 - Present</p>
        <ImageModal imgSrc={catImg}></ImageModal>
      </SectionCard>
    </>
  );
}
