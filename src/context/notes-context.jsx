import { createContext } from "react";

export const NoteContext = createContext({
  onApplyBtn: () => {},
});

export default function NoteContextProvider({ children, setNotes }) {
  function handleApplyBtnClick(newNote) {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, newNote];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  }

  const ctxValue = {
    onApplyBtn: handleApplyBtnClick,
  };

  return (
    <NoteContext.Provider value={ctxValue}>{children}</NoteContext.Provider>
  );
}
