import { Divider, Emoji, Icon, SectionCard } from "components/base";

import { skillsToolsData } from "data";

export function Skills() {
  return (
    <>
      {skillsToolsData.map((data) => (
        <>
          <SectionCard key={data.skill_id}>
            <h3>
              <b>{data.skill_type}</b>
            </h3>
            <p>
              {data.skill_item.map((item) => item.skill_item_name).join(", ")}
            </p>
            <>
              <div>
                {/* Filter not nulled url and tell TypeScript that imgSrc is always a string */}
                {data.skill_item
                  .filter((item) => item.skill_icon_url !== null)
                  .map((item) => (
                    <Icon
                      key={item.skill_item_id}
                      imgSrc={item.skill_icon_url as string}
                    />
                  ))}
              </div>
            </>
            {data.skill_id == skillsToolsData.length && <Emoji />}
          </SectionCard>
          {/* hide divider on the last child element  */}
          {data.skill_id < skillsToolsData.length && <Divider />}
        </>
      ))}
    </>
  );
}
