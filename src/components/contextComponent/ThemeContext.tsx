import React, { createContext } from "react";
import { theme } from "./Theme";

type TemeContextProvider = {
  children: React.ReactNode
}

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({children}: TemeContextProvider) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
};