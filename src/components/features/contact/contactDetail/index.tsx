import { Emoji, Icon, ImageModal, SectionCard } from "components/base";

import catImg from "/img/catcode.png";
import { contactData } from "data/contactData";

export function ContactDetail() {
  return (
    <>
      <SectionCard>
        <p>
          <b>Thank you</b> for reaching until this far
        </p>
        <br />
        <p>Let's connect and 🌟 collaborate 🌟</p>
        <p className="mb-5">I can be reached out via one of these platforms</p>
        <div className="my-5">
          {contactData.map((data) => (
            <>
              <div key={data.contact_id} className="flex gap-2 my-2">
                <Icon imgSrc={data.contact_icon_url} />
                <a
                  href={data.contact_url}
                  className="gap-3 text-blue-800"
                  target="_blank"
                >
                  {data.contact_username}
                </a>
              </div>
            </>
          ))}
        </div>

        <ImageModal imgSrc={catImg}></ImageModal>
        <Emoji />
      </SectionCard>
    </>
  );
}
