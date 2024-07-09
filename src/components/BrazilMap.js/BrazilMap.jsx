import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { useTheme } from "../../context/ThemeContext";
import { Stack, Tooltip } from "@mui/material";

const geoUrl = "/mapa-brasil.json";

const BrazilMap = ({zoom, center, handleSelectCounty}) => {
  const { theme } = useTheme();
  return (
    <ComposableMap
      style={{
        width: "50vw",
        height: "auto",
        border: `1px solid ${theme.colors.text}`,
        background: theme.colors.secondary,
        position: "relative",
      }}
    >
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
              <Tooltip title={geo.properties.name}>
                <Geography
                  key={geo.id}
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
  );
};

export default BrazilMap;
