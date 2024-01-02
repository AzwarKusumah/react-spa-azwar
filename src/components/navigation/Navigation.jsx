import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsTranslate } from "react-icons/bs";
import LocaleContext from "../contexts/LocaleContext";

function Navigation() {
  const { locale, toggleLocale } = useContext(LocaleContext);
  return (
    <>
      <div className="navbar bg-base-100 px-16 sticky top-0 z-50">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">
            {locale === "en" ? <p>RyukoNotes</p> : <p>CatatanRyuko</p>}
          </Link>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost" onClick={toggleLocale}>
            <BsTranslate className="w-full h-full" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navigation;
