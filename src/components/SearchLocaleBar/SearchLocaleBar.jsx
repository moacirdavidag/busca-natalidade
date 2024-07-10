import { FormControl, InputLabel, MenuItem, Select, Stack } from "@mui/material";
import React from "react";
import { useTheme } from "../../context/ThemeContext";

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
          id="demo-simple-select-estado"
          value={selectedState}
          label="Estado:"
          onChange={(event) => {
            const UF = event.target.value;
            handleChangeState(UF);
          }}
          aria-label="Seleção de estado"
          sx={{
            background: theme.colors.primary,
            color: theme.colors.text,
          }}
        >
          {states &&
            states.map((state) => (
              <MenuItem key={state.sigla} value={state.sigla}>
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
          id="demo-simple-select-municipio"
          disabled={!selectedState}
          value={selectedCounty?.id ?? ""}
          label="Município:"
          onChange={(event) => {
            const countyId = event.target.value;
            const county = counties.find((county) => county.id === countyId);
            handleChangeCounty({
              id: county.id,
              properties: {
                codigo: county.id,
                name: county.name ?? county.nome,
              },
            });
          }}
          aria-label="Seleção de município"
          aria-disabled={!selectedState}
          sx={{
            background: selectedState ? theme.colors.primary : "disabled",
            color: theme.colors.text,
          }}
        >
          {counties &&
            counties.map((county) => (
              <MenuItem key={county.id} value={county.id}>
                {county.nome}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default SearchLocaleBar;