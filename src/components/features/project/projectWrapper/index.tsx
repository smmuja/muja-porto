import { DearDeadliner, Divider, Inovhub, NewsApp, Wrapper } from "components";
import { SectionTitle } from "layouts";

export function ProjectWrapper() {
  return (
    <>
      <SectionTitle title={"# Project Experiences"} />
      <Wrapper>
        <Inovhub />
        <Divider />
        <NewsApp />
        <Divider />
        <DearDeadliner />
      </Wrapper>
    </>
  );
}
