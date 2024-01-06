import React, { useContext } from "react";
import PropTypes from "prop-types";

import LocaleContext from "./contexts/LocaleContext";

function NotesSearch({ onSearch }) {
  const { locale } = useContext(LocaleContext);

  return (
    <div className="container m-auto px-1">
      <div className="label">
        <span className="label-text">
          {locale === "id" ? "Nyari note?" : "looking for notes?"}
        </span>
      </div>
      <input
        type="text"
        placeholder={locale === "id" ? "Cari disini..." : "Search here..."}
        className="input input-bordered input-neutral w-full max-w-xs m-auto"
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

NotesSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default NotesSearch;
