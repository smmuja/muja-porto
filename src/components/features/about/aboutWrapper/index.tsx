import { AboutText, Wrapper } from "components";
import { SectionTitle } from "layouts";

export function AboutWrapper() {
  return (
    <>
      <SectionTitle title={"# About"} />
      <Wrapper className="border-0 m-0 px-0">
        <AboutText />
      </Wrapper>
    </>
  );
}
