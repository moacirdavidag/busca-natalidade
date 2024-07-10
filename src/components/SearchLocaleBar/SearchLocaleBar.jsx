import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const geoUrl = "/mapa-brasil.json";

const SearchLocaleBar = ({
  selectedCounty,
  handleChangeCounty,
  selectedState,
  handleChangeState,
  counties,
  states,
}) => {
  const { theme } = useTheme();
  return (
    <Stack
      sx={{
        width: "100%",
        backgroundColor: theme.colors.secondary,
        borderRadius: 2,
        padding: 2,
      }}
      direction={"row"}
      spacing={2}
    >
      <FormControl fullWidth>
        <InputLabel id="estado-label" sx={{ color: theme.colors.text }}>
          Estado
        </InputLabel>
        <Select
          labelId="estado-label"
          id="demo-simple-select"
          value={selectedState}
          label="Estado:"
          onChange={(event) => {
            const UF = event.target.value;
            handleChangeState(UF);
          }}
          sx={{ background: theme.colors.primary }}
        >
          {states &&
            states.map((state) => (
              <MenuItem value={state.sigla} sx={{ color: theme.colors.text }}>
                {state.nome}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="municipio-label" sx={{ color: theme.colors.text }}>
          Município
        </InputLabel>
        <Select
          labelId="municipio-label"
          id="demo-simple-select"
          disabled={!selectedState}
          value={selectedCounty}
          label="Município:"
          onChange={(event) => {
            const county = event.target.value;
            handleChangeCounty({
              properties: {
                codigo: county.id,
                name: county.nome
              }
            })
          }}
          sx={{ background: selectedState ? theme.colors.primary : "disabled" }}
        >
          {counties &&
            counties.map((county) => (
              <MenuItem value={county} sx={{ color: theme.colors.text }}>
                {county.nome}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default SearchLocaleBar;
