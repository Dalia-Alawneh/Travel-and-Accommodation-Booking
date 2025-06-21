import { SxProps } from "@mui/material";

export const overlaySx: SxProps = {
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  bgcolor: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(3px)",
};

export const bookButtonStyle = {
  fontWeight: 600,
  py: 1,
  width: { xs: "100%", sm: "initial" },
  bgcolor: "custom.salver",
  "&:hover": {
    bgcolor: "custom.orange",
    color: "custom.beige",
  },
};
