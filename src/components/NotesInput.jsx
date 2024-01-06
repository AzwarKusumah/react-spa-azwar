import React, { useContext, useState } from "react";
import useInput from "./hooks/useInput";
import { RiSaveLine } from "react-icons/ri";
import PropTypes from "prop-types";
import LocaleContext from "./contexts/LocaleContext";

const NotesInput = ({ addNote }) => {
  const [title, setTitle] = useInput("");
  const [body, setBody] = useState("");
  const { locale } = useContext(LocaleContext);

  const onBodyChangeEventHandler = (event) => {
    setBody(event.target.innerHTML);
  };

  const onSubmitEventHandler = () => {
    addNote({ title, body });
  };

  console.log(body);

  return (
    <div className="container m-auto h-screen">
      <div className="mt-8">
        <input
          type="text"
          placeholder={locale === "id" ? "Catatan rahasia" : "Secret notes"}
          className="w-full p-4 text-4xl bg-transparent border-2 border-neutral-900 font-bold"
          value={title}
          onChange={setTitle}
        />
        <div
          className="w-full bg-transparent text-2xl p-2 min-h-[500px] mt-8 border-2 border-neutral-900 before:empty:content-[attr(data-placeholder)]"
          contentEditable
          data-placeholder={
            locale === "id" ? "Sebenarnya saya adalah..." : "Actually I am..."
          }
          onInput={onBodyChangeEventHandler}
        ></div>
      </div>
      <div className="fixed flex gap-4 bottom-8 right-8">
        <button
          className="btn cursor-pointer flex text-4xl justify-center items-center text-base-100 bg-neutral rounded-xl p-2 w-12 h-12 border-0"
          type="button"
          onClick={onSubmitEventHandler}
        >
          <RiSaveLine />
        </button>
      </div>
    </div>
  );
};

NotesInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NotesInput;
