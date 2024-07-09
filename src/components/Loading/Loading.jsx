import { CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "../../context/ThemeContext";

const Loading = () => {
  const { theme } = useTheme();
  return (
    <Stack
      direction="column"
      gap={2}
      alignItems={"center"}
      justifyContent={"center"}
      display={'flex'}
    >
      <CircularProgress style={{ color: theme.colors.darkblue }} />
      <Typography sx={{color: theme.colors.text}}>Carregando informações...</Typography>
    </Stack>
  );
};

export default Loading;
