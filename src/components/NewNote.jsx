import { useState } from "react";
import Modal from "./Modal";

const NewNote = () => {
  const [showNewNoteModal, setShowNewNoteModal] = useState(false);

  function newNoteBtnClick() {
    setShowNewNoteModal(true);
  }

  return (
    <>
      {showNewNoteModal && <Modal />}
      <div className="fixed bottom-1/4 right-1/4 ">
        <button
          onClick={newNoteBtnClick}
          className="text-white bg-appPurple pb-[6px] px-[11px] rounded-full text-4xl font-semibold hover:bg-darkAppPurple"
        >
          +
        </button>
      </div>
    </>
  );
};

export default NewNote;
