import { useState } from "react";
import "./App.css";
import { GlobalStyles } from "./styles/global";
import { useTheme } from "./context/ThemeContext";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <GlobalStyles />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <MainContent />
    </>
  );
}

export default App;
