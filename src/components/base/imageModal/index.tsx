import { useState } from "react";
import { sectionModal } from "./type";
import { Modal } from "components/base";

export function ImageModal(props: sectionModal) {
  const { children, imgSrc, modalId } = props;
  const [isModalOpen, setModalOpen] = useState(false);

  // For single modal/without mapping always set modalId to 1
  // accordion isOpen by default

  const [openItems, setOpenItems] = useState<number[]>(
    modalId ? [modalId] : [1]
  );

  const handleAccordion = (id: number) => {
    if (modalId == null) {
      setOpenItems([]);
    }
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((item) => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  const imgFileName = imgSrc
    .split("/")
    .slice(imgSrc.split("/").length - 1)[0]
    .split("?")[0];

  return (
    <>
      <div
        onClick={() => handleAccordion(modalId || 1)}
        className="flex gap-2 items-center pb-1 mt-1 text-slate-600 hover:cursor-pointer hover:text-slate-400 "
      >
        {/* If image file name is too long, return image.png by default  */}
        <p className="text-sm">
          {imgFileName.length < 20 ? imgFileName : "image.png"}
        </p>
        <button>{openItems.includes(modalId || 1) ? "⌃" : "⌄"}</button>
      </div>
      {openItems.includes(modalId || 1) && (
        <>
          <div onClick={() => setModalOpen(true)}>
            {children}
            <img
              src={imgSrc}
              alt={imgFileName}
              className="w-44 border border-opacity-25 border-slate-500 rounded-md cursor-zoom-in"
            />
            {children}
          </div>
          {isModalOpen && (
            <Modal onClose={() => setModalOpen(false)} isOpen={true}>
              <img
                src={imgSrc}
                alt={imgFileName}
                className="w-full sm:w-6/12"
              />
              {children}
            </Modal>
          )}
        </>
      )}
    </>
  );
}
