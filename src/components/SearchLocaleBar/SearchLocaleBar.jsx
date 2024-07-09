import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import React from "react";
import { useTheme } from "../../context/ThemeContext";

const SearchLocaleBar = ({selectedCounty, handleChangeCounty, selectedState, handleChangeState}) => {
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
          //   value={age}
          label="Estado"
          //   onChange={handleChange}
          sx={{ background: theme.colors.primary }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
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
          //   value={age}
          label="Município"
          //   onChange={handleChange}
          sx={{ background: selectedState ? theme.colors.primary : 'disabled' }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};

export default SearchLocaleBar;
