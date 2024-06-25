import { Divider, Icon, SectionCard } from "components/base";
import collaborationImg from "assets/logo/collaboration.png";
import customerImg from "assets/logo/customer.png";

export function SoftSkill() {
  return (
    <>
      <SectionCard title={""} imgUrl={""}>
        <h3>
          <b>Soft Skills</b>
        </h3>
        <p>Communication, Customer Interaction, Cross-team collaboration</p>
        <Icon imgSrc={collaborationImg} />
        <Icon imgSrc={customerImg} />
        <Divider />
      </SectionCard>
    </>
  );
}
