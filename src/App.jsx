import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

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
  return (
    <>
      <div className="max-w-[960px] mr-auto ml-auto pr-6 pl-6">
        <NotesList notes={notes} />
      </div>
    </>
  );
}

export default App;
