import { Icon, ImageModal, SectionCard } from "components/base";
import { servicesData } from "data";

export function Services() {
  return (
    <>
      {servicesData.map((data) => (
        <SectionCard key={data.service_id}>
          <Icon imgSrc={data.service_icon} className="rounded-full" />
          <h3 className="font-semibold text-slate-800">{data.service_name}</h3>
          <p className="text-slate-800">{data.service_description}</p>
          <a
            href={data.service_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 text-lg font-medium"
          >
            {data.service_url}
          </a>
          <ImageModal imgSrc={data.service_image} />
        </SectionCard>
      ))}
    </>
  );
}
