import { Emoji, Wrapper, ProfileSnippet } from "components/base";
import {
  AboutSnippet,
  ButtonViewAbout,
  // ProfileSnippet,
} from "components/features";

export function HomeWrapper() {
  return (
    <Wrapper>
      <ProfileSnippet />
      <AboutSnippet />
      <Emoji />
      <ButtonViewAbout />
    </Wrapper>
  );
}
