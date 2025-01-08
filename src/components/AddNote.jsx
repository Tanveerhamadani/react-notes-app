import { useState } from "react";

const addNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;
  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className=" card-style add-note">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type To Add A Note"
        className=" add-note rounded-none resize-none focus:outline-none placeholder-white"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="card-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button
          className="bg-stone-200 rounded-2xl  px-2 py-1 hover:bg-white cursor-pointer"
          onClick={handleClick}
        >
          Save Note
        </button>
      </div>
    </div>
  );
};

export default addNote;
