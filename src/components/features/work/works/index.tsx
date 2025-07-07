import { Icon, ImageModal, SectionCard } from "components/base";

import { workData } from "data";

export function Works() {
  const workDataSort = workData.sort((a, b) => b.work_id - a.work_id);

  return (
    <>
      {workDataSort.map((data) => (
        <>
          <SectionCard key={data.work_id}>
            {data.work_icon.map((workIcon) => (
              <>
                <Icon
                  key={workIcon.work_icon_id}
                  imgSrc={workIcon.work_icon_url}
                />
              </>
            ))}
            <h3 className="font-semibold text-slate-800">
              {data.work_company}
            </h3>
            <p className="italic font-semibold text-slate-800">
              {data.work_title}
            </p>
            <p>{data.work_location}</p>
            <p>
              {data.work_start_date} - {data.work_end_date}
            </p>
            <ImageModal imgSrc={data.work_illustration_image_url}></ImageModal>
          </SectionCard>
        </>
      ))}
    </>
  );
}
