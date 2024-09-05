import { ImageModal, SectionCard } from "components/base";
import { AboutCTA } from "components/features/about";
import { aboutData, boldTerms } from "data/aboutData";

export function Abouts() {
  const boldText = (text: string, terms: string[]) => {
    const regex = new RegExp(`(${terms.join("|")})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      // terms.includes(part) ? <strong key={index}>{part} </strong> : part

      // search term comparison case insensitive
      terms.some((term) => term.toLowerCase() === part.toLocaleLowerCase()) ? (
        <strong key={index}>{part} </strong>
      ) : (
        part
      )
    );
  };
  return (
    <>
      {aboutData.map((data) => (
        <SectionCard key={data.about_id}>
          {boldText(data.about_content, boldTerms)}
          <br />
          {data.illustration_img_url !== null && (
            <ImageModal imgSrc={data.illustration_img_url}></ImageModal>
          )}

          {data.about_id == aboutData.length && <AboutCTA />}
        </SectionCard>
      ))}
    </>
  );
}
