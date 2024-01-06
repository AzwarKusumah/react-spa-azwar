import React from "react";
import { RiInboxArchiveFill, RiInboxUnarchiveFill } from "react-icons/ri";
import PropTypes from "prop-types";

function NotesButton({ id, archived, onArchived }) {
  const icon = archived ? <RiInboxUnarchiveFill /> : <RiInboxArchiveFill />;

  return (
    <button
      className="btn cursor-pointer flex text-4xl justify-center items-center text-base-100 bg-neutral rounded-xl p-2 w-12 h-12 border-0"
      type="button"
      onClick={() => onArchived(id)}
    >
      {icon}
    </button>
  );
}

NotesButton.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchived: PropTypes.func.isRequired,
};
export default NotesButton;
