import { useState } from "react";
import { Modal } from "../modal";
import { sectionModal } from "./type";

export function ImageModal(props: sectionModal) {
  const { children, imgSrc } = props;
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div onClick={() => setModalOpen(true)}>
        <p className="text-sm mt-1 text-slate-600">image.png</p>
        {children}
        <img
          src={imgSrc}
          alt=""
          className="w-44 border border-opacity-25 border-slate-500 rounded-md cursor-zoom-in"
        />
        {children}
      </div>
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)} isOpen={true}>
          <img src={imgSrc} alt="" />
          {children}
        </Modal>
      )}
    </>
  );
}
