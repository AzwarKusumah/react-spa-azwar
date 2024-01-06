import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/network-data";
import { ToastContainer, toast } from "react-toastify";
import PropTypes from "prop-types";

import NotesDetailPage from "../components/NotesDetailPage";
import NotesDetailAction from "../components/NotesDetailAction";
import NotesLoading from "../components/NotesLoading";
import Page404 from "./Page404";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notes, setNotes] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await getNote(id);
      setNotes(data);
      setLoading(false);
    })();
  }, [id]);

  async function onDeleteHandler(id) {
    await deleteNote(id);
    toast("🗑️ Note telah dihapus", {
      onClose: () => navigate("/"),
    });
  }

  async function onArchiveHandler(id) {
    if (notes.archived) {
      await unarchiveNote(id);
      toast.success("Note Telah di unarchived", {
        onClose: () => navigate("/"),
      });
    } else {
      await archiveNote(id);
      toast.success("Note Telah di archived", {
        onClose: () => navigate("/archives"),
      });
    }
  }
  return (
    <>
      {loading ? (
        <NotesLoading />
      ) : !notes ? (
        <Page404 />
      ) : (
        <>
          <ToastContainer autoClose={1500} />
          <NotesDetailPage notes={notes} />
          <NotesDetailAction
            id={id}
            archived={notes.archived}
            onArchived={onArchiveHandler}
            onDelete={onDeleteHandler}
          />
        </>
      )}
    </>
  );
}

DetailPage.propTypes = {
  id: PropTypes.string,
};

export default DetailPage;
