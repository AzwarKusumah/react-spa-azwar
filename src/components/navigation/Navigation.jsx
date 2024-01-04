import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsTranslate, BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";

import LogoutButton from "./LogoutButton";
import LocaleContext from "../contexts/LocaleContext";
import ThemeContext from "../contexts/ThemeContext";

function Navigation() {
  const { locale, toggleLocale } = useContext(LocaleContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div className="navbar bg-base-100 px-16 sticky top-0 z-50">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">
            {locale === "en" ? <p>RyukoNotes</p> : <p>CatatanRyuko</p>}
          </Link>
        </div>
        <div className="flex-none gap-6">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onClick={toggleTheme} />
            {theme === "luxury" ? (
              <BsSunFill className="fill-current w-8 h-8" />
            ) : (
              <BsFillMoonStarsFill className="fill-current w-8 h-8" />
            )}
          </label>
          <button className="btn btn-square btn-ghost" onClick={toggleLocale}>
            <BsTranslate className="w-8 h-8" />
          </button>
          <LogoutButton />
        </div>
      </div>
    </>
  );
}

export default Navigation;
