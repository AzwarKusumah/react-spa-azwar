import React from "react";
import { BsFillTrash2Fill } from "react-icons/bs";
import NotesButton from "./NotesButton";
import PropTypes from "prop-types";

function NotesDetailAction({ id, archived, onArchived, onDelete }) {
  return (
    <div className="fixed flex gap-4 bottom-8 right-8">
      <NotesButton id={id} archived={archived} onArchived={onArchived} />
      <button
        className="btn cursor-pointer flex text-4xl justify-center items-center text-base-100 bg-neutral rounded-xl p-2 w-12 h-12 border-0"
        type="button"
        onClick={() => onDelete(id)}
      >
        <BsFillTrash2Fill />
      </button>
    </div>
  );
}

NotesDetailAction.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchived: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NotesDetailAction;
