"use client";
import { ThemeProvider } from "@emotion/react";
import { colors, createTheme } from "@mui/material";

const myTheme = createTheme({
  typography: {
    fontFamily: "inherit",
  },

  palette: {
    narutoOrange: {
      light: colors.orange[400],
      // main: colors.orange[500],
      main: "#FF9432",
      dark: colors.orange[700],
    },
  },
});

export const MyThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ThemeProvider theme={myTheme}>{children}</ThemeProvider>;
};
