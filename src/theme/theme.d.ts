import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    custom?: {
      gold: string;
      orange: string;
      salver: string;
      beige: string;
    };
  }
}
