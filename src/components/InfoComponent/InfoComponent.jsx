import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import Loading from "../Loading/Loading";
import CustomTab from '../CustomTab/CustomTab';
import { useTheme } from "../../context/ThemeContext";

const InfoComponent = ({ isLoading, selectedCounty }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const {theme} = useTheme();

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  }


  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.colors.secondary,
        borderRadius: 2,
        padding: 2,
      }}
    >
      {!selectedCounty ? (
        <Typography sx={{color: theme.colors.text}}>Selecione uma cidade</Typography>
      ) : isLoading ? (
        <Loading />
      ) : (
        <>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={selectedTab}
              onChange={handleChangeTab}
            >
              <Tab label="Dados Gerais" value={0} />
              <Tab label="Gráficos por situação" value={1} />
            </Tabs>
          </Box>
          {selectedTab === 0 && <CustomTab>Oi</CustomTab> }
          {selectedTab === 1 && <CustomTab>Olá</CustomTab> }
          {selectedTab === 2 && <CustomTab>Oiii</CustomTab> }
        </>
      )}
    </Box>
  );
};

export default InfoComponent;
