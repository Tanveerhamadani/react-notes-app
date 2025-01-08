import React from "react";
import { MdSearch } from "react-icons/md";

const Search = () => {
  return (
    <div className="flex items-center  bg-slate-400 rounded-md p-2 mb-2 mt-5">
      <MdSearch className="size-6" />
      <input
        type="text"
        placeholder="Type To Search The Note..."
        className="rounded-none bg-slate-400 placeholder-white outline-none"
      />
    </div>
  );
};

export default Search;
