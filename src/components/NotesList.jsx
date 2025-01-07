import Note from "./Note";
import AddNote from "./AddNote";
const NotesList = ({ notes, handleAddNote }) => {
  return (
    <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]   ">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
