import React from "react";

const addNote = () => {
  return (
    <div className=" card-style add-note">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type To Add A Note"
        className="rounded-none resize-none"
      ></textarea>
      <div className="card-footer">
        <small>200 Remaining</small>
        <button>Add</button>
      </div>
    </div>
  );
};

export default addNote;
