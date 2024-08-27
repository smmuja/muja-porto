import { Emoji, Wrapper, ProfileSnippet, Card } from "components/base";
import { ProjectSnippet, ButtonViewProject } from "components/features";
import { SectionTitle } from "layouts";
import userImg from "assets/img/user.png";

export function HomeWrapper() {
  return (
    <>
      <SectionTitle imgSrc={userImg} title={"Muja Portfolio"} />
      <Wrapper>
        <Card className="mx-5 px-5 border-0">
          <ProfileSnippet />
          <ProjectSnippet />
          <Emoji />
          <ButtonViewProject />
        </Card>
      </Wrapper>
    </>
  );
}
