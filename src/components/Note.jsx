import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date }) => {
  return (
    <div className="bg-sky-500  rounded-xl p-8 min-h-44 flex flex-col justify-between">
      <span>{text}</span>

      <div className="flex items-center justify-between">
        <small>{date}</small>
        <MdDeleteForever className="size-6" />
      </div>
    </div>
  );
};

export default Note;
