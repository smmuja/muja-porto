import { Card, Divider, Icon } from "components/base";

import { skillsToolsData } from "data/skillsToolsData";

import { profileData } from "data";

export function AboutMeSummary() {
  return (
    <Card className="flex border-none m-0 p-0 lg:w-5/6">
      <Divider />
      <div>
        <p>{profileData.about_summary}</p>
        <br />
        <div className="grid grid-cols-12 gap-1 lg:block lg:w-5/6">
          {skillsToolsData
            .flatMap((data) =>
              data.skill_item
                .filter((item) => item.skill_icon_url !== null)
                .map((item) => ({
                  id: item.skill_item_id,
                  url: item.skill_icon_url,
                }))
            )
            .map((icon) => (
              <Icon key={icon.id} imgSrc={icon.url as string} />
            ))}
        </div>
        <br />
        <p>{profileData.closing_statement}</p>
        <br />
        <p>View my Project section to learn more 🌟 🌟</p>
      </div>
    </Card>
  );
}
