import { useCallback, useEffect, useState } from "react";
import "./App.css";
import { GlobalStyles } from "./styles/global";
import { useTheme } from "./context/ThemeContext";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import { Box } from "@mui/material";
import { apiLocalidades } from "./services/api";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [zoom, setZoom] = useState(4);
  const [center, setCenter] = useState([-410, -14]);
  const [counties, setCounties] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCounty, setSelectedCounty] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectCounty = (county) => {
    setIsLoading(true);
    setSelectedCounty(county);
    setZoom(50);
    setIsLoading(false);
  };

  const handleSelectState = (state) => {
    setSelectedState(state);
  }

  const handleGetStates = useCallback(async () => {
    try {
      await apiLocalidades.get('/estados?orderBy=nome')
      .then((response) => {
        if(response.status === 200) {
          setStates(response.data);
        }
      })
    } catch (error) {
      console.log("Erro ao obter os estados:");
      console.error(error);
    }
  }, [states]);

  const handleGetCounties = useCallback(async () => {
    try {
      await apiLocalidades.get(`/estados/${selectedState}/municipios?orderBy=nome`)
      .then((response) => {
        if(response.status === 200) {
          setCounties(response.data);
        }
      })
    } catch (error) {
      console.log("Erro ao obter os estados:");
      console.error(error);
    }
  }, [selectedState]);

  useEffect(() => {
    handleGetStates();
    if(selectedState) {
      handleGetCounties();
    }
  }, [selectedState])

  return (
    <Box style={{ width: "100%", maxWidth: "100vw" }}>
      <GlobalStyles />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <MainContent
        center={center}
        zoom={zoom}
        handleSelectCounty={handleSelectCounty}
        selectedCounty={selectedCounty}
        isLoading={isLoading}
        states={states}
        counties={counties}
        selectedState={selectedState}
        handleSelectState={handleSelectState}
      />
    </Box>
  );
}

export default App;
