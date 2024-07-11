import Controls from "./components/Controls";
import Header from "./components/Header";
import NewNote from "./components/NewNote";
import Notes from "./components/Notes";

const App = () => {
  return (
    <>
      <Header />
      <Controls />
      <Notes />
      <NewNote />
    </>
  );
};

export default App;
