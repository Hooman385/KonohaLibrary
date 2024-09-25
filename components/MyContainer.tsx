"use client";
import { Box } from "@mui/material";

const MyContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        bgcolor: (theme) => theme.palette.narutoOrange?.main,
        minHeight: { xs: "calc(100dvh- 56px)", sm: "calc(100dvh - 64px)" },
      }}
    >
      {children}
    </Box>
  );
};

export default MyContainer;
