import React, { useState, useEffect, useMemo } from "react";
import Route from "./components/routes/Route";
import AuthContext from "./components/contexts/AuthContext";
import Navigation from "./components/navigation/Navigation";
import { LocaleProvider } from "./components/contexts/LocaleContext";

function App() {
  const [auth, setAuth] = useState(null);
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("locale", newLocale);
      return newLocale;
    });
  };

  const authContextValue = useMemo(() => {
    return {
      auth,
      setAuth,
    };
  }, [auth]);

  const localeContextValue = useMemo(
    () => ({
      locale,
      toggleLocale,
    }),
    [locale]
  );

  return (
    <div>
      <LocaleProvider value={localeContextValue}>
        <AuthContext.Provider value={authContextValue}>
          <Navigation />
          <Route />
        </AuthContext.Provider>
      </LocaleProvider>
    </div>
  );
}

export default App;
