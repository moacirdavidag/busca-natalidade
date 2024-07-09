import { createContext, useContext, useState } from "react";
import { darkTheme, lightTheme } from "../styles/themes";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.name === "Tema claro" ? darkTheme : lightTheme
    );
  };

  return <ThemeContext.Provider value={{theme, toggleTheme}}>
    <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
  </ThemeContext.Provider>
};

export const useTheme = () => useContext(ThemeContext); 