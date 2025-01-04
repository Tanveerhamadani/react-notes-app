import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date }) => {
  return (
    <div className="card-style">
      <span>{text}</span>

      <div className="card-footer">
        <small>{date}</small>
        <MdDeleteForever className="size-6" />
      </div>
    </div>
  );
};

export default Note;
