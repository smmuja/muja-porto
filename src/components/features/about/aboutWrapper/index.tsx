import { Wrapper } from "components/base";
import { Abouts } from "components/features/about";
import { SectionTitle } from "layouts/default-layouts/components";

export function AboutWrapper() {
  return (
    <>
      <SectionTitle title={"# About"} />
      <Wrapper>
        <Abouts />
      </Wrapper>
    </>
  );
}
