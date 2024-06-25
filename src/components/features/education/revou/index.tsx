import { Emoji, ImageModal, SectionCard } from "components";

import catImg from "assets/img/catCode.png";

export function RevoU() {
  return (
    <>
      <SectionCard title={""} imgUrl={""}>
        <>
          <h3>
            <b>RevoU</b>
          </h3>
          <span>Oct 2023 - Jun 2024</span>
          <p className="italic">Full Stack Software Engineering</p>
          <ImageModal imgSrc={catImg}></ImageModal>
          <Emoji />
          <></>
        </>
      </SectionCard>
    </>
  );
}
