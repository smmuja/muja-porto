import {
  Card,
  Divider,
  Emoji,
  Icon,
  ImageModal,
  SectionCard,
} from "components/base";

import backgroundImg from "assets/logo/problem.png";
import solutionImg from "assets/logo/solution.png";
import outputImg from "assets/logo/apple.png";
import techImg from "assets/logo/setting.png";
import { projectData } from "data";
import { useState } from "react";

export function Projects() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const handleAccordion = (id: number) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((item) => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };
  return (
    <>
      {projectData.map((data) => (
        <>
          <SectionCard key={data.project_id}>
            <h3 className="font-semibold text-lg text-slate-700">
              {data.project_name}
            </h3>
            <a
              className="text-blue-800"
              href={data.project_linkdeploy}
              target="_blank"
            >
              {data.project_website_name}
            </a>

            <div className="bg-slate-100 rounded-lg px-3 p-0 py-2 ">
              <div
                onClick={() => handleAccordion(data.project_id)}
                className="font-semibold text-slate-800 text-base flex justify-between items-center hover:cursor-pointer hover:text-slate-600 "
              >
                <h3 className="hover:underline">Project Details</h3>
                <button>
                  {openItems.includes(data.project_id) ? "⌃" : "⌄"}
                </button>
              </div>
              {openItems.includes(data.project_id) && (
                <>
                  <div className="pb-7">
                    <p>{data.project_overview}</p>
                    <Card className="border-none ">
                      <Icon
                        imgSrc={backgroundImg}
                        className="size-12 float-left"
                      />

                      <p className="italic font-semibold text-slate-700">
                        Background
                      </p>
                      <p>{data.project_background}</p>
                    </Card>
                    <Card className="border-none">
                      <Icon
                        imgSrc={solutionImg}
                        className="size-12 float-left"
                      />
                      <p className="italic font-semibold text-slate-700">
                        Solution
                      </p>
                      <p>{data.project_solution}</p>
                    </Card>
                    <Card className="border-none">
                      <Icon imgSrc={outputImg} className="size-12 float-left" />
                      <p className="italic font-semibold text-slate-700">
                        Output
                      </p>
                      <p>{data.project_output}</p>
                    </Card>
                    <Card className="border-none">
                      <Icon imgSrc={techImg} className="size-12 float-left" />
                      <p className="italic font-semibold text-slate-700">
                        Tech
                      </p>
                      <p>{data.project_techstack}</p>
                    </Card>
                  </div>
                </>
              )}
            </div>

            {/* Github source code not null */}
            {data.project_github_sourcecode !== "" && (
              <>
                <p className="mt-2 lg:mt-5 font-medium">GitHub source code</p>
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
            <ImageModal
              imgSrc={data.project_image_url}
              modalId={data.project_id}
            ></ImageModal>
            <Emoji />
          </SectionCard>
          {/* hide divider on the last child element  */}
          {data.project_id < projectData.length - 1 && <Divider />}
        </>
      ))}
    </>
  );
}
