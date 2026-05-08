import { Emoji, Icon, ImageModal, SectionCard } from "components/base";

import { educationData } from "data";
import { Link } from "react-router-dom";

export function Educations() {
  return (
    <>
      {educationData.map((data) => (
        <>
          <SectionCard key={data.education_id}>
            <>
              <Icon
                imgSrc={data.education_institution_logo}
                tooltip={data.education_name}
              />
              <h3>
                <Link to={data.education_url}>
                  <b>{data.education_name}</b>
                </Link>
              </h3>
              <span>
                {data.education_start_date} - {data.education_end_date}
              </span>
              <p className="italic">{data.education_subject_degree}</p>
              <p>Grade : {data.education_final_grade}</p>
              <a
                className="text-blue-700 "
                href={data.final_project_url}
                target="_blank"
              >
                {data.final_project}
              </a>
              {data.illustration_image_url !== "" && (
                <ImageModal imgSrc={data.illustration_image_url}></ImageModal>
              )}
              {data.education_id == educationData.length && <Emoji />}
            </>
          </SectionCard>
        </>
      ))}
    </>
  );
}
