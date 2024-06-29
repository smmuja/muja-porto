import {
  AboutCS,
  AboutFE,
  AboutFSSE,
  AboutFocus,
  AboutSE,
  AboutSEO,
  Wrapper,
} from "components";
import { SectionTitle } from "layouts";

export function AboutWrapper() {
  return (
    <>
      <SectionTitle title={"# About"} />
      <Wrapper className="border-0 m-0 px-0">
        <AboutSE />
        <AboutCS />
        <AboutSEO />
        <AboutFSSE />
        <AboutFE />
        <AboutFocus />
      </Wrapper>
    </>
  );
}
