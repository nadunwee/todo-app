import { useRef, useState } from "react";
import Modal from "./Modal";

const NewNote = ({ onApplyBtn }) => {
  const [showNewNoteModal, setShowNewNoteModal] = useState(false);

  const dialogRef = useRef();

  function newNoteBtnClick() {
    setShowNewNoteModal(true);
  }

  function closeModal() {
    setShowNewNoteModal(false);
    if (dialogRef.current) {
      dialogRef.current.close(); // Close the modal when canceled
    }
  }

  return (
    <>
      {showNewNoteModal && (
        <Modal ref={dialogRef} onClose={closeModal} onApplyBtn={onApplyBtn} />
      )}
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
