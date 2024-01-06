import React from "react";
import NotesItemList from "./NotesItemList";
import PropTypes from "prop-types";
import { noteItemPropTypes } from "./NotesCard";

function NotesItemBody({ notes }) {
  return (
    <>
      <div className="h-screen px-1 sm:px-24 py-10 md:py-20">
        <main className="container m-auto">
          <NotesItemList notes={notes} />
        </main>
      </div>
    </>
  );
}

NotesItemBody.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape(noteItemPropTypes)).isRequired,
};

export default NotesItemBody;
