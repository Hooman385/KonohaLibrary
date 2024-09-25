import { PaletteColor, PaletteColorOptions } from "@mui/material";

declare module "@mui/material/styles" {


  interface Palette {
    narutoOrange?: PaletteColor;
  }

  interface PaletteOptions {
    narutoOrange?: PaletteColorOptions;
  }
}
