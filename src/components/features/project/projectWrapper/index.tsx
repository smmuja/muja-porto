import { DearDeadliner, Divider, Inovhub, NewsApp, Wrapper } from "components";

export function ProjectWrapper() {
  return (
    <Wrapper>
      <Divider children={"Project Experience"} />
      <Inovhub />
      <Divider />
      <NewsApp />
      <Divider />
      <DearDeadliner />
    </Wrapper>
  );
}
