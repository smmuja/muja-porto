import { Emoji, Wrapper, ProfileSnippet } from "components/base";
import {
  AboutSnippet,
  ButtonViewAbout,
  // ProfileSnippet,
} from "components/features";

export function HomeWrapper() {
  return (
    <Wrapper className="m-5 p-5">
      <ProfileSnippet />
      <AboutSnippet />
      <Emoji />
      <ButtonViewAbout />
    </Wrapper>
  );
}
