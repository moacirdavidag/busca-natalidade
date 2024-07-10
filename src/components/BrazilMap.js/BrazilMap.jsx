import React, { useEffect, useState, Suspense, lazy } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Tooltip } from "@mui/material";
import axios from "axios";
import Loading from "../Loading/Loading";

const ComposableMap = lazy(() =>
  import("react-simple-maps").then((module) => ({
    default: module.ComposableMap,
  }))
);
const Geographies = lazy(() =>
  import("react-simple-maps").then((module) => ({
    default: module.Geographies,
  }))
);
const Geography = lazy(() =>
  import("react-simple-maps").then((module) => ({ default: module.Geography }))
);
const ZoomableGroup = lazy(() =>
  import("react-simple-maps").then((module) => ({
    default: module.ZoomableGroup,
  }))
);

const geoUrl = "/mapa-brasil.json";

const BrazilMap = ({ zoom, center, handleSelectCounty }) => {
  const { theme } = useTheme();
  const [geoData, setGeoData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        const response = await axios.get(geoUrl);
        if (response.status === 200) {
          setGeoData(response.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log("Erro ao obter os dados do mapa!");
        setIsLoading(false);
      }
    };

    fetchMapData();
  }, []);

  return (
    <div
      style={{
        width: "50vw",
        height: "auto",
        border: `1px solid ${theme.colors.text}`,
        background: theme.colors.secondary,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isLoading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
          <ComposableMap>
            <ZoomableGroup
              center={center}
              zoom={zoom}
              minZoom={4}
              maxZoom={80}
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              <Geographies geography={geoData}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Tooltip key={geo.id} title={geo.properties.name}>
                      <Geography
                        geography={geo}
                        fill={"#023047"}
                        style={{
                          hover: {
                            fill: "#219EBC",
                          },
                          pressed: {
                            fill: theme.colors.darkblue,
                          },
                        }}
                        cursor={"pointer"}
                        onClick={() => {
                          handleSelectCounty(geo);
                        }}
                      />
                    </Tooltip>
                  ))
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </Suspense>
      )}
    </div>
  );
};

export default BrazilMap;
