import React from "react";
import NotesItemList from "./NotesItemList";
import PropType from "prop-types";

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

NotesItemBody.proptype = {
  notes: PropType.object.isRequired,
};

export default NotesItemBody;
