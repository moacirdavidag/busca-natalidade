import React from "react";
import BrazilMap from "../BrazilMap/BrazilMap";
import { Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import SearchLocaleBar from "../SearchLocaleBar/SearchLocaleBar";
import InfoComponent from "../InfoComponent/InfoComponent";

const MainContent = ({
  isLoading,
  selectedCounty,
  zoom,
  center,
  handleSelectCounty,
  counties,
  states,
  handleSelectState,
  selectedState,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid
      container
      width="100%"
      spacing={isSmallScreen ? 2 : 1}
      direction={isSmallScreen ? "column" : "row"}
      alignItems="center"
      justifyContent="center"
      my={1}
      role="region"
      aria-labelledby="main-content"
    >
      <Grid item xs={12} md={isSmallScreen ? 12 : 7}>
        <BrazilMap
          zoom={zoom}
          center={center}
          handleSelectCounty={handleSelectCounty}
        />
      </Grid>
      <Grid item xs={12} md={isSmallScreen ? 12 : 4}>
        <Stack width="100%" gap={isExtraSmallScreen ? 1 : 2} direction="column">
          <SearchLocaleBar
            selectedCounty={selectedCounty}
            handleChangeCounty={handleSelectCounty}
            counties={counties}
            states={states}
            handleChangeState={handleSelectState}
            selectedState={selectedState}
          />
          <InfoComponent
            isLoading={isLoading}
            selectedCounty={selectedCounty}
            selectedState={selectedState}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MainContent;
