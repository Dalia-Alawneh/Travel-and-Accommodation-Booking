import { Theme } from "@mui/material/styles";

/**
 *
 * @param theme MUI theme object
 * @param backgroundColor bgColor can be hex or theme.palette
 * @returns A string representing the best contrast text color
 */

const getContrastTextColor = (
  theme: Theme,
  backgroundColor: string,
): string => {
  return theme.palette.getContrastText(backgroundColor);
};

export default getContrastTextColor;
