import { Wrapper } from "components/base";
import {
  AboutSnippet,
  ButtonViewAbout,
  ProfileSnippet,
} from "components/features";

export function HomeWrapper() {
  return (
    <Wrapper>
      <ProfileSnippet />
      <AboutSnippet />
      <ButtonViewAbout />
    </Wrapper>
  );
}
