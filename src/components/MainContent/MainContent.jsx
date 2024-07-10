import React, { useState } from "react";
import BrazilMap from "../BrazilMap/BrazilMap";
import { Grid, Stack } from "@mui/material";
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
  return (
    <Grid
      container
      width={"100vw"}
      spacing={1}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      my={1}
    >
      <Grid item xs={7}>
        <BrazilMap
          zoom={zoom}
          center={center}
          handleSelectCounty={handleSelectCounty}
        />
      </Grid>
      <Grid item xs={4}>
        <Stack width={"100%"} gap={2} direction={"column"}>
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
