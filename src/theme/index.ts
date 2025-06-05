import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FEFA17",
    },
    background: {
      default: "#ffffff",
      paper: "#f9f9f9",
    },
    text: {
      primary: "#111111",
      secondary: "#555555",
    },
  },
  typography: {
    fontFamily: '"Manrope", sans-serif',
    h1: {
      fontSize: "4rem",
      fontWeight: 900,
    },
    h2: {
      fontSize: "3.25rem",
      fontWeight: 900,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 900,
    },
    body1: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: 9999,
          border: "1px solid",
          padding: "13px 23px",
          boxShadow: "none",
          textTransform: "none",
          borderColor: "#E4E6E8",
          "&:hover": {
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export default theme;
