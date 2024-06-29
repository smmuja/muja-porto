import { ImageModal, SectionCard } from "components";
import { projectUrl } from "config";
import { Link } from "react-router-dom";

export function AboutFE() {
  return (
    <>
      <SectionCard title={""} imgUrl={""}>
        From a complete beginner, starting with <b>HTML, CSS, JavaScript</b>{" "}
        trio and diving deeper into Front-end framework such as <b>ReactJS</b>{" "}
        and <b>NextJS</b>, I finally got to make my own apps after 6 months
        learning from scratch!
        <br />
        See my{" "}
        <Link to={projectUrl} className="text-blue-700 font-semibold">
          Project
        </Link>{" "}
        section.
        <ImageModal
          imgSrc={
            "https://media.giphy.com/media/Nm8ZPAGOwZUQM/giphy.gif?cid=ecf05e47dgdyaqfb9vmujwfyq7zwzb0quicpdvcmy8zg29qg&ep=v1_gifs_related&rid=giphy.gif&ct=g"
          }
        ></ImageModal>
      </SectionCard>
    </>
  );
}
