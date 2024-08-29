import { Button, Card, Emoji, ProfileSnippet, Wrapper } from "components/base";

import userImg from "/img/user.png";
import { useOpenRightSidebarContext } from "providers/OpenRightSidebarContext";
import { AboutMeSummary, ButtonViewProject } from "components/features/home";

export function RightSidebar() {
  const { handleCloseRightSidebar, isRightSidebarOpen } =
    useOpenRightSidebarContext();

  return (
    <>
      {isRightSidebarOpen && (
        <Card
          className={`border-0 hidden md:flex flex-col md:w-full lg:w-1/2 overflow-hidden`}
        >
          <div className="flex justify-between">
            <div className="flex gap-3">
              <img src={userImg} alt="" className="size-7 rounded-md" />
              <h3 className="font-semibold m-0 text-lg">Muja Portfolio</h3>
            </div>
            <Button onClick={() => handleCloseRightSidebar()} className="m-0">
              X
            </Button>
          </div>

          <Wrapper className="m-5 p-10 border-0">
            <ProfileSnippet />
            <AboutMeSummary />
            <Emoji />
            <ButtonViewProject />
          </Wrapper>
        </Card>
      )}
    </>
  );
}
