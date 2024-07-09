import React, { useState } from "react";
import BrazilMap from "../BrazilMap.js/BrazilMap";
import { Grid, Stack } from "@mui/material";
import SearchLocaleBar from "../SearchLocaleBar/SearchLocaleBar";
import InfoComponent from "../InfoComponent/InfoComponent";

const MainContent = ({isLoading, selectedCounty, zoom, center, handleSelectCounty}) => {
  
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
          <SearchLocaleBar />
          <InfoComponent isLoading={isLoading} selectedCounty={selectedCounty} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MainContent;
