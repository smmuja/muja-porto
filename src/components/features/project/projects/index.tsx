import { Divider, Emoji, Icon, ImageModal, SectionCard } from "components";

import backgroundImg from "assets/logo/problem.png";
import solutionImg from "assets/logo/solution.png";
import outputImg from "assets/logo/apple.png";
import techImg from "assets/logo/setting.png";
import { projectData } from "data";

export function Projects() {
  return (
    <>
      {projectData.map((data) => (
        <>
          <SectionCard className="">
            <b>
              <h3 className="font-semibold text-lg">{data.project_name}</h3>
            </b>
            <b>
              <a
                className="text-blue-800"
                href={data.project_linkdeploy}
                target="_blank"
              >
                {data.project_website_name}
              </a>
            </b>
            <p>{data.project_overview}</p>
            <br />
            <Icon imgSrc={backgroundImg} className="size-14 float-left" />
            <b>
              <p className="italic font-semibold">Background</p>
            </b>
            <p>{data.project_background}</p>
            <br />
            <Icon imgSrc={solutionImg} className="size-14 float-left" />
            <b>
              <p className="italic font-semibold">Solution</p>
            </b>
            <p>{data.project_solution}</p>
            <br />
            <Icon imgSrc={outputImg} className="size-14 float-left" />
            <b>
              <p className="italic font-semibold">Output</p>
            </b>
            <p>{data.project_output}</p>
            <br />
            <Icon imgSrc={techImg} className="size-14 float-left" />
            <b>
              <p className="italic font-semibold">Tech</p>
            </b>
            <p>{data.project_techstack}</p>
            {/* Github source code not null */}
            {data.project_github_sourcecode !== "" && (
              <>
                <p className="mt-5  font-medium">GitHub source code</p>
                <a
                  className="text-blue-800"
                  href={data.project_github_sourcecode}
                  target="_blank"
                >
                  {data.project_github_sourcecode}
                </a>
              </>
            )}
            <br />
            <br />
            <ImageModal imgSrc={data.project_image_url}></ImageModal>
            <Emoji />
          </SectionCard>
          {/* hide divider on the last child element  */}
          {data.project_id < projectData.length - 1 && <Divider />}
        </>
      ))}
    </>
  );
}
