import { Emoji, Wrapper, ProfileSnippet, Card } from "components/base";
import { AboutMeSummary, ButtonViewProject } from "components/features/home";
import { SectionTitle } from "layouts/default-layouts/components";
import userImg from "assets/img/user.png";

export function HomeWrapper() {
  return (
    <>
      <SectionTitle imgSrc={userImg} title={"Muja Portfolio"} />
      <Wrapper>
        <Card className="mx-5 px-5 border-0">
          <ProfileSnippet />
          <AboutMeSummary />
          <Emoji />
          <ButtonViewProject />
        </Card>
      </Wrapper>
    </>
  );
}
