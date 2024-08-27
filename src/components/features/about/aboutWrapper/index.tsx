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
      <Wrapper>
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
