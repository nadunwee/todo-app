import { forwardRef, useContext, useRef } from "react";
import { createPortal } from "react-dom";
import { NoteContext } from "../context/notes-context";

const Modal = forwardRef(({ onClose }, ref) => {
  const { onApplyBtn } = useContext(NoteContext);
  const newNote = useRef();
  return createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
    >
      <dialog
        className="max-w-fit flex flex-col p-6 justify-center items-center rounded-2xl bg-white"
        open
        ref={ref}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <p className="text-xl font-semibold tracking-wide mb-[15px]">
          NEW NOTE
        </p>
        <input
          type="text"
          ref={newNote}
          placeholder="Input Your Note..."
          className="border-appPurple border rounded focus:outline-none focus:ring-2 focus:ring-appPurple w-[400px] h-[28px] py-4 pl-2 pr-2"
        />
        <form method="dialog" className="mt-[50px] w-full flex justify-between">
          <button
            type="button"
            onClick={onClose}
            className="border-appPurple border-2 text-appPurple font-semibold py-1.5 px-4 rounded tracking-wide"
          >
            CANCEL
          </button>
          <button
            type="button"
            onClick={() => onApplyBtn(newNote.current.value)}
            className="bg-appPurple border-none text-white font-semibold py-1.5 px-6 rounded tracking-wide"
          >
            APPLY
          </button>
        </form>
      </dialog>
    </div>,
    document.getElementById("modal")
  );
});

export default Modal;
