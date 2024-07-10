import { Box, Divider, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import CustomTab from "../CustomTab/CustomTab";
import { useTheme } from "../../context/ThemeContext";
import { apiDadosNatalidade } from "../../services/api";
import Charts from "../Charts/Charts";

const InfoComponent = ({ isLoading, selectedCounty, selectedState }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { theme } = useTheme();

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };


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
        <Typography sx={{ color: theme.colors.text }}>
          Selecione uma cidade
        </Typography>
      ) : isLoading ? (
        <Loading />
      ) : (
        <>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={selectedTab} onChange={handleChangeTab}>
              <Tab label="Dados Gerais" value={0} />
            </Tabs>
          </Box>
          {selectedTab === 0 && (
            <CustomTab>
              <Stack
                direction="row"
                width={"100%"}
                justifyContent={"space-around"}
              >
                <Stack direction={"row"} gap={1}>
                  <Typography fontWeight={"bold"} color={theme.colors.text}>
                    Cidade:
                  </Typography>{" "}
                  <Typography color={theme.colors.text}>
                    {selectedCounty.properties.name}
                  </Typography>
                </Stack>
                <Stack direction={"row"} gap={1}>
                  <Typography fontWeight={"bold"} color={theme.colors.text}>
                    Estado:
                  </Typography>{" "}
                  <Typography color={theme.colors.text}>
                    {selectedState}
                  </Typography>
                </Stack>
              </Stack>
              <Divider sx={{ my: 2 }} />
              <Charts selectedCounty={selectedCounty} />
            </CustomTab>
          )}
        </>
      )}
    </Box>
  );
};

export default InfoComponent;
