import { Emoji, Wrapper, ProfileSnippet, Card } from "components/base";
import { AboutSnippet, ButtonViewAbout } from "components/features";
import { SectionTitle } from "layouts";
import userImg from "assets/img/user.png";

export function HomeWrapper() {
  return (
    <Wrapper>
      <SectionTitle imgSrc={userImg} title={"Muja Portfolio"} />
      <Card className="m-5 p-5 border-0">
        <ProfileSnippet />
        <AboutSnippet />
        <Emoji />
        <ButtonViewAbout />
      </Card>
    </Wrapper>
  );
}
