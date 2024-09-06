import { Emoji, Wrapper, ProfileSnippet, Card } from "components/base";
import { AboutMeSummary, ButtonViewProject } from "components/features/home";
import { SectionTitle } from "layouts/default-layouts/components";
import { profileData } from "data";

export function HomeWrapper() {
  return (
    <>
      <SectionTitle
        imgSrc={profileData.profile_img_url}
        title={`${profileData.name} Portfolio`}
      />
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
