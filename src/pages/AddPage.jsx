import React from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/network-data";
import { ToastContainer, toast } from "react-toastify";
import NotesInput from "../components/NotesInput";

function AddPage() {
  const navigate = useNavigate();

  function addNoteHandler(note) {
    addNote(note);
    toast.success("Note berhasil ditambahkan", {
      onClose: () => navigate("/"),
    });
  }

  return (
    <>
      <ToastContainer autoClose={1500} />
      <NotesInput addNote={addNoteHandler} />
    </>
  );
}

export default AddPage;
