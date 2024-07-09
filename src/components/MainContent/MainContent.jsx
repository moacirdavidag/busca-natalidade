import React from "react";
import { Box, FormGroup, FormLabel, Grid, Select, Stack, MenuItem } from "@mui/material";

const MainContent = () => {
  return (
    <Grid container spacing={2} direction={"row"} width={"100%"} my={1} p={3}>
      <Grid item xs={8}>
        <Box
          sx={{
            width: "100%",
            height: "70vh",
            background: "#FFF",
            borderRadius: 1,
          }}
        >
          Oi
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Stack
          direction="row"
          gap={2}
          sx={{ width: "100%", p: 2, background: "#FFF", borderRadius: 1 }}
        >
          <FormGroup sx={{flex: 1}}>
            <FormLabel htmlFor="estado-select">Estado</FormLabel>
            <Select id="estado-select">
              <MenuItem value="" disabled>
                Selecione um estado
              </MenuItem>
              <MenuItem value="SP">São Paulo</MenuItem>
              <MenuItem value="RJ">Rio de Janeiro</MenuItem>
            </Select>
          </FormGroup>
          <FormGroup sx={{flex: 1}}>
            <FormLabel htmlFor="municipio-select">Município</FormLabel>
            <Select id="municipio-select" placeholder="Município">
              <MenuItem value="" disabled>
                Selecione um município
              </MenuItem>
              <MenuItem value="sao_paulo">São Paulo</MenuItem>
              <MenuItem value="rio_de_janeiro">Rio de Janeiro</MenuItem>
            </Select>
          </FormGroup>
        </Stack>
      </Grid>
      
    </Grid>
  );
};

export default MainContent;
