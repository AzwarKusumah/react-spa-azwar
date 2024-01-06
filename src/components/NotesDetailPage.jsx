import React from "react";
import { showFormattedDate } from "../utils/index";
import parser from "html-react-parser";
import PropTypes from "prop-types";

function NotesDetailPage({ notes }) {
  return (
    <section className="h-screen container mx-auto mt-8 mb-8 px-2 py-1 border-b-8 border-r-8 border-t-2 border-l-2 border-neutral-900">
      <h1 className="text-6xl font-bold mb-4">{notes.title}</h1>
      <p className="text-md">{showFormattedDate(notes.createdAt)}</p>
      <div className="mt-6">{parser(notes.body)}</div>
    </section>
  );
}

NotesDetailPage.propTypes = {
  notes: PropTypes.object.isRequired,
};

export default NotesDetailPage;
