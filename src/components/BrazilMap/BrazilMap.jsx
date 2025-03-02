import React, { useEffect, useState, Suspense } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Tooltip, useMediaQuery, useTheme as muiTheme } from "@mui/material";
import Loading from "../Loading/Loading";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";

const geoUrl = "/municipios-brasil.json";

const BrazilMap = ({ zoom, center, handleSelectCounty }) => {
  const { theme } = useTheme();
  const themeMui = muiTheme();
  const [geoData, setGeoData] = useState({ type: "FeatureCollection", features: [] });
  const [isLoading, setIsLoading] = useState(true);

  const isSmallScreen = useMediaQuery(themeMui.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(themeMui.breakpoints.down("md"));


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
        width: `${isSmallScreen ? '100vw' : isMediumScreen ? '100vw' : '50vw'}`,
        height: "auto",
        border: `1px solid ${theme.colors.text}`,
        background: "#AACDCD",
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
              <Geographies geography={geoUrl}>
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
