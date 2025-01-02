import Note from "./Note";

const NotesList = ({ notes }) => {
  return (
    <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]   ">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
    </div>
  );
};

export default NotesList;
