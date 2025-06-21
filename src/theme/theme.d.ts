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
      lightBlue: string;
      danger: string;
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
      lightBlue: string;
      danger: string;
    };
  }
  interface Theme {
    customShadows: {
      light: string;
      heavy: string;
    };
  }
  interface ThemeOptions {
    customShadows?: {
      light?: string;
      heavy?: string;
    };
  }
}
