import { useState } from "react";
import { Modal } from "../modal";
import { navPath } from "config";
import { Button, IconLink } from "components";
import { IconMenu2 } from "@tabler/icons-react";

export function Hamburger() {
  //   const { children, imgSrc } = props;
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div onClick={() => setModalOpen(true)}>
        <Button className="text-sm mt-1 text-slate-600">
          <IconMenu2 />
        </Button>
      </div>
      {isModalOpen && (
        <Modal
          onClose={() => setModalOpen(false)}
          isOpen={true}
          className="top-0 right-0 m-0 p-0 py-7 w-full sm:w-1/2 h-fit bg-fuchsia-950 justify-start absolute"
        >
          <nav className=" flex flex-col justify-start m-0 p-3 gap-5 bg-fuchsia-950 text-gray-400 w-full relative ">
            {navPath.map((item) => {
              return (
                <>
                  <IconLink
                    link={item.path}
                    label={item.title}
                    icon={<item.icon />}
                  />
                </>
              );
            })}
          </nav>
        </Modal>
      )}
    </>
  );
}
