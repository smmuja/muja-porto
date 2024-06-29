import { Icon, SectionCard } from "components";

import unsImg from "assets/logo/uns.png";

export function UNSEdu() {
  return (
    <>
      <SectionCard title={""} imgUrl={""}>
        <>
          <Icon imgSrc={unsImg} />
          <h3>
            <b>Universitas Sebelas Maret</b>
          </h3>
          <span>Surakarta, 2017 - 2021</span>
          <p className="italic">Bachelor of English Literature</p>
          <p>Grade : 3.59/4</p>
          <a
            className="text-blue-700 "
            href="https://digilib.uns.ac.id/dokumen/abstrak/85452/A-Translation-Analysis-of-Technical-Terms-in-Googles-Search-Engine-Optimization-Starter-Guide"
            target="_blank"
          >
            A Translation Analysis of Technical Terms in Google's Search Engine
            Optimization Starter Guide (Abstract)
          </a>
        </>
      </SectionCard>
    </>
  );
}
