import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

function NotesAdd() {
  const navigate = useNavigate();
  return (
    <div className="fixed flex gap-4 bottom-8 right-8">
      <button
        className="btn cursor-pointer flex text-4xl justify-center items-center text-base-100 bg-neutral rounded-xl p-2 w-12 h-12 border-0"
        type="button"
        onClick={() => navigate("/notes/new")}
      >
        <FaPlus />
      </button>
    </div>
  );
}

export default NotesAdd;
