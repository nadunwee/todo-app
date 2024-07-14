import { useState } from "react";

import Controls from "./components/Controls";
import Header from "./components/Header";
import NewNote from "./components/NewNote";
import Notes from "./components/Notes";
import NoteContextProvider from "./context/notes-context";

const App = () => {
  const [notes, setNotes] = useState(() => {
    // Initialize state from local storage
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [searchedNote, setSearchedNote] = useState("");

  function handleSearchBtnClick(searchedNote) {
    setSearchedNote(searchedNote);
  }

  let filteredNotes = notes;
  if (notes.length > 0 && searchedNote) {
    filteredNotes = notes.filter((note) => note === searchedNote);
  }

  return (
    <NoteContextProvider setNotes={setNotes}>
      <Header />
      <Controls onSearchBtn={handleSearchBtnClick} />
      <Notes notes={filteredNotes} />
      <NewNote />
    </NoteContextProvider>
  );
};

export default App;
