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
      secondary: "#bbb",
      disabled: "#aaa",
    },
    custom: {
      gold: "#FFC700",
      orange: "#F09814",
      salver: "#F2F4F6",
      beige: "#FFECD0",
      darkSalver: "#b6b6b6",
      skyBlue: "#4196d7",
    },
  },
  typography: {
    fontFamily: '"Manrope", sans-serif',
    h1: {
      fontSize: "3.5rem",
      fontWeight: 900,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 900,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 900,
    },
    h4: {
      fontSize: "1.1rem",
    },
    body1: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    h5: {
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
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: "1rem",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          fontSize: "12px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "12px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 32,
          p: 0,
          backgroundColor: "#fff",
          border: "1px solid inside #E4E6E8",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "9999px",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            borderColor: "#4196d7",
          },
        },
        input: {
          fontSize: 15,
          padding: "12px 20px",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          color: "#1976d2",
          textDecoration: "none",
          transition: "all 0.2s ease-in-out",
          fontWeight: 600,
          "&:hover": {
            color: "#4196d7",
          },
          "&:visited": {
            color: "#4196d7",
          },
        },
      },
    },
  },
});

export default theme;
