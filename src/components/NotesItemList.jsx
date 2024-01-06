import React, { useContext } from "react";
import { noteItemPropTypes } from "./NotesCard";
import NotesCard from "./NotesCard";
import PropTypes from "prop-types";

import LocaleContext from "./contexts/LocaleContext";

function NotesItemList({ notes }) {
  const { locale } = useContext(LocaleContext);

  return (
    <>
      {notes.length !== 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
          {notes.map((note) => (
            <NotesCard
              key={note.id}
              id={note.id}
              title={note.title}
              createdAt={note.createdAt}
              body={note.body}
            />
          ))}
        </div>
      ) : (
        <p>
          {locale === "id" ? "Notes nya gaada ngabss" : "There are no notes"}
        </p>
      )}
    </>
  );
}

NotesItemList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape(noteItemPropTypes)).isRequired,
};

export default NotesItemList;
