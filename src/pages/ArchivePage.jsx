import React, { useState, useEffect, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { getArchivedNotes } from "../utils/network-data";

import NotesSearch from "../components/NotesSearch";
import NotesItemBody from "../components/NotesItemBody";
import LocaleContext from "../components/contexts/LocaleContext";

function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("title");
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(title || "");
  const { locale } = useContext(LocaleContext);

  const changeSearchParams = (keyword) => {
    setSearchParams({ title: keyword });
  };

  const onSearchEventHandler = (keyword) => {
    setKeyword(keyword);
    changeSearchParams(keyword);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  return (
    <>
      <h2 className="text-2xl font-bold mb-8 text-center">
        {locale === "id" ? "Catatan Arsip" : "Archive Notes"}
      </h2>
      <NotesSearch onSearch={onSearchEventHandler} />
      <NotesItemBody notes={filteredNotes} />
    </>
  );
}

export default ArchivePage;
