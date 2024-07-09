import React from "react";
import { Box, Stack, Tooltip, Typography } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Header = ({ theme, toggleTheme }) => {
  return (
    <Stack
      direction="row"
      justifyContent={"space-around"}
      alignItems="center"
      sx={{
        width: "100vw",
        maxWidth: "100%",
        background: theme.colors.secondary
      }}
      p={3}
    >
      <Box>
        <Typography
          fontWeight={600}
          variant={"h4"}
          sx={{ color: theme.colors.darkblue }}
        >
          Busca Natalidade
        </Typography>
      </Box>
      <Box>
        <Tooltip
          title={theme.name === "Tema claro" ? "Tema escuro" : "Tema claro"}
        >
          {theme.name === "Tema claro" ? (
            <DarkModeIcon
              cursor="pointer"
              sx={{ color: theme.colors.darkblue }}
              onClick={toggleTheme}
            />
          ) : (
            <LightModeIcon
              cursor="pointer"
              sx={{ color: theme.colors.darkblue }}
              onClick={toggleTheme}
            />
          )}
        </Tooltip>
      </Box>
    </Stack>
  );
};

export default Header;
