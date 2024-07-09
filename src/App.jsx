import { useState } from "react";
import "./App.css";
import { GlobalStyles } from "./styles/global";
import { useTheme } from "./context/ThemeContext";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import { Box } from "@mui/material";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [zoom, setZoom] = useState(4);
  const [center, setCenter] = useState([-410, -14]);
  const [selectedCounty, setSelectedCounty] = useState(null);

  const handleSelectCounty = (county) => {
    setSelectedCounty(county);
    setZoom(50);
  };

  return (
    <Box style={{ width: "100%", maxWidth: "100vw" }}>
      <GlobalStyles />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <MainContent
        center={center}
        zoom={zoom}
        handleSelectCounty={handleSelectCounty}
        selectedCounty={selectedCounty}
        isLoading={false}
      />
    </Box>
  );
}

export default App;
