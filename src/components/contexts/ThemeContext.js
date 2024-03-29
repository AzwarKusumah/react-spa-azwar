import React from "react";

const ThemeContext = React.createContext("luxury");

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;