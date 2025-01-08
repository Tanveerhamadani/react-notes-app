import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="card-style">
      <span>{text}</span>

      <div className="card-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="size-6 hover:bg-white rounded-xl cursor-pointer"
          onClick={() => {
            handleDeleteNote(id);
          }}
        />
      </div>
    </div>
  );
};

export default Note;
