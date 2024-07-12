import { useState } from "react";

import Controls from "./components/Controls";
import Header from "./components/Header";
import NewNote from "./components/NewNote";
import Notes from "./components/Notes";

const App = () => {
  const [notes, setNotes] = useState(() => {
    // Initialize state from local storage
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  function handleApplyBtnClick(newNote) {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, newNote];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  }

  return (
    <>
      <Header />
      <Controls />
      <Notes notes={notes} />
      <NewNote onApplyBtn={handleApplyBtnClick} />
    </>
  );
};

export default App;
