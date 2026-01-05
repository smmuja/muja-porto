import { Emoji, Icon, ImageModal, SectionCard } from "components/base";
import { workData } from "data";
import { useState } from "react";

export function Works() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const workDataSort = [...workData].sort((a, b) => b.work_id - a.work_id);

  const handleAccordion = (id: number) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((item) => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  return (
    <>
      {workDataSort.map((data) => (
        <div key={data.work_id} className="m-0 p-0">
          <SectionCard>
            {data.work_icon.map((workIcon) => (
              <Icon
                key={workIcon.work_icon_id}
                imgSrc={workIcon.work_icon_url}
              />
            ))}

            <h3 className="font-semibold text-lg text-slate-700">
              {data.work_company}
            </h3>
            <p className="italic font-semibold text-slate-800">
              {data.work_title}
            </p>
            <p>{data.work_location}</p>
            <p>
              {data.work_start_date} – {data.work_end_date}
            </p>

            {/* Work details accordion */}
            {data.work_responsibilities.length > 0 && (
              <div className="bg-slate-100 rounded-lg px-3 p-0 py-2 sm:max-w-lg">
                <div
                  onClick={() => handleAccordion(data.work_id)}
                  className="font-semibold text-slate-800 text-base flex justify-between items-center hover:cursor-pointer hover:text-slate-600"
                >
                  <h3 className="hover:underline">Work Details</h3>
                  <button>
                    {openItems.includes(data.work_id) ? "⌃" : "⌄"}
                  </button>
                </div>
                {openItems.includes(data.work_id) && (
                  <>
                    <div className="pb-7">
                      <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
                        {data.work_responsibilities.map((item, itemIndex) => (
                          <li key={itemIndex} className="break-words">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            )}

            <br />
            <ImageModal
              imgSrc={data.work_illustration_image_url}
              modalId={data.work_id}
            />
            <div className="invisible">
              <Emoji />
            </div>
          </SectionCard>
        </div>
      ))}
    </>
  );
}
