import React, { useState, useEffect, useMemo } from "react";
import Route from "./components/routes/Route";
import NotesLoading from "./components/NotesLoading";
import Navigation from "./components/navigation/Navigation";
import { getUserLogged } from "./utils/network-data";

import AuthContext from "./components/contexts/AuthContext";
import { LocaleProvider } from "./components/contexts/LocaleContext";
import { ThemeProvider } from "./components/contexts/ThemeContext";

function App() {
  const [auth, setAuth] = useState(null);
  const [locale, setLocale] = useState(localStorage.getItem("locale") || "id");
  const [theme, setTheme] = useState(
    localStorage.getItem("data-theme") || "luxury"
  );
  const [loading, setLoading] = useState(true);

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === "id" ? "en" : "id";
      localStorage.setItem("locale", newLocale);
      return newLocale;
    });
  };

  const toggleTheme = () => {
    setTheme((prevState) => {
      const newTheme = prevState === "luxury" ? "autumn" : "luxury";
      localStorage.setItem("data-theme", newTheme);
      return newTheme;
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

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const fetchUserLogged = async () => {
      try {
        const res = await getUserLogged();
        if (!res.error) {
          setAuth(res.data);
        } else {
          setAuth(null);
          setErrorMessage("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setErrorMessage("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchUserLogged();
  }, []);

  return (
    <div>
      <ThemeProvider value={themeContextValue}>
        <LocaleProvider value={localeContextValue}>
          <AuthContext.Provider value={authContextValue}>
            <Navigation />
            {loading ? <NotesLoading /> : <Route />}
          </AuthContext.Provider>
        </LocaleProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
