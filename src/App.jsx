import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Hello,Tanveer Gulzar",
      date: "02/01/2025",
    },
    {
      id: nanoid(),
      text: "Hello,Tanveer Gulzar 1",
      date: "01/01/2025",
    },
    {
      id: nanoid(),
      text: "Hello,Tanveer Gulzar 2 ",
      date: "03/01/2025",
    },
    {
      id: nanoid(),
      text: "Hello,Tanveer Gulzar 3",
      date: "06/01/2025",
    },
    {
      id: nanoid(),
      text: "Hello,Tanveer Gulzar 4",
      date: "04/01/2025",
    },
    {
      id: nanoid(),
      text: "Hello,Tanveer Gulzar 5",
      date: "02/01/2025",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNotes = (id) => {
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  };

  return (
    <>
      <div className="max-w-[960px] mr-auto ml-auto pr-6 pl-6">
        <Search />
        <NotesList
          notes={notes}
          handleAddNote={addNote}
          handleDeleteNote={deleteNotes}
        />
      </div>
    </>
  );
}

export default App;
