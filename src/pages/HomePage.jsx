import React, { useState, useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes } from "../utils/network-data";
import PropTypes from "prop-types";

import NotesItemBody from "../components/NotesItemBody";
import NotesAdd from "../components/NotesAdd";
import NotesSearch from "../components/NotesSearch";

import LocaleContext from "../components/contexts/LocaleContext";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title");

  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(title || "");
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  function onSearch(keyword) {
    setSearchParams({ title: keyword });
    setKeyword(keyword);
  }

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );
  return (
    <>
      <h2 className="text-2xl font-bold mb-8 text-center">
        {locale === "id" ? "Catatan Aktif" : "Active Notes"}
      </h2>
      <NotesSearch onSearch={onSearch} />
      <NotesItemBody notes={filteredNotes} />
      <NotesAdd />
    </>
  );
}

export default HomePage;
