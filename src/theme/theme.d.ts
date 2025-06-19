import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      gold: string;
      orange: string;
      salver: string;
      beige: string;
      darkSalver: string;
      skyBlue: string;
      overlay: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      gold: string;
      orange: string;
      salver: string;
      beige: string;
      darkSalver: string;
      skyBlue: string;
      overlay: string;
    };
  }
}
