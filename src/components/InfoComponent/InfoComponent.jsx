import { Box, Divider, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import CustomTab from "../CustomTab/CustomTab";
import { useTheme } from "../../context/ThemeContext";
import { apiDadosNatalidade } from "../../services/api";

const InfoComponent = ({ isLoading, selectedCounty, selectedState }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { theme } = useTheme();

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleGetAPIData = async () => {
    try {
      await apiDadosNatalidade.get(`?localidades=N6[${selectedCounty.properties.codigo}]&classificacao=1[all]|1598[all]|12232[all]
      `).then((response) => {
        if(response.status === 200) {
        }
      });
    } catch (error) {
      console.log(`Erro ao obter os dados da API: ${error.message}`);
    }
  };

  useEffect(() => {
    handleGetAPIData();
  }, [selectedCounty])

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
              <Tab label="Gráficos por situação" value={1} />
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
            </CustomTab>
          )}
          {selectedTab === 1 && <CustomTab>Olá</CustomTab>}
          {selectedTab === 2 && <CustomTab>Oiii</CustomTab>}
        </>
      )}
    </Box>
  );
};

export default InfoComponent;
