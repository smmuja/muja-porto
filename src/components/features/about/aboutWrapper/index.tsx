import { AboutTry, Divider, Wrapper } from "components";

export function AboutWrapper() {
  return (
    <Wrapper className="border-0 m-0 px-0">
      <Divider children={"About"} />
      <AboutTry />
    </Wrapper>
  );
}
