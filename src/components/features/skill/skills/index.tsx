import { Fragment } from "react"; // 1. Import Fragment
import { Divider, Emoji, Icon, SectionCard } from "components/base";
import { skillsToolsData } from "data";

export function Skills() {
  return (
    <>
      {skillsToolsData.map((data) => (
        /* 2. Use Fragment with a key as the top-level element of the map */
        <Fragment key={`section-wrapper-${data.skill_id}`}>
          <SectionCard>
            <h3>
              <b>{data.skill_type}</b>
            </h3>
            <p>
              {data.skill_item.map((item) => item.skill_item_name).join(", ")}
            </p>
            <div>
              {data.skill_item
                .filter((item) => item.skill_icon_url !== null)
                .map((item) => (
                  <Icon
                    /* This key is already good! */
                    key={`icon-${data.skill_id}-${item.skill_item_id}`}
                    imgSrc={item.skill_icon_url as string}
                    tooltip={item.skill_item_name}
                  />
                ))}
            </div>
            {data.skill_id === skillsToolsData.length && <Emoji />}
          </SectionCard>
          {/* hide divider on the last child element  */}
          {data.skill_id < skillsToolsData.length && <Divider />}
        </Fragment>
      ))}
    </>
  );
}
