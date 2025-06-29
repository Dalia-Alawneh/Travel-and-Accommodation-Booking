import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4196d7",
      dark: "#444444",
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
      overlay: "#ffffff1a",
      lightBlue: "#a6dbfc4a",
      danger: "#d32f2f",
    },
  },

  customShadows: {
    light: "0 0 8px 2px #eee",
    heavy: "0px 8px 20px rgba(0,0,0,0.2)",
  },

  typography: {
    fontFamily: '"Manrope", sans-serif',
    h1: {
      fontWeight: 900,
      fontSize: "clamp(3rem, 5vw, 4.5rem)",
    },
    h2: {
      fontWeight: 900,
      fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
    },
    h3: {
      fontWeight: 900,
      fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
    },
    h4: {
      fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
    },
    body1: {
      fontWeight: 500,
      fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
    },
    body2: {
      fontWeight: 500,
      fontSize: "clamp(0.9rem, 2vw, 1rem)",
    },
    h5: {
      fontWeight: 500,
      fontSize: "clamp(0.9rem, 2vw, 1rem)",
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
        multiline: {
          borderRadius: "12px",
          padding: "2px",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          color: "#111",
          textDecoration: "none",
          transition: "all 0.2s ease-in-out",
          fontWeight: 600,
          "&:hover": {
            color: "#4196d7",
          },
          "&:visited": {
            color: "#327bb3",
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&.Mui-selected": {
            backgroundColor: theme.palette.custom.salver,

            "&:hover": {
              backgroundColor: theme.palette.custom.salver,
            },

            "& svg": {
              color: theme.palette.custom.gold,
            },
          },
        }),
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
        }),
      },
    },
  },
});

export default theme;
