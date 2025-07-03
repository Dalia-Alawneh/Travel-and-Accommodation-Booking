import type { Preview } from "@storybook/react-vite";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../src/theme";
import { UserProvider } from "../src/context/user";
import { BrowserRouter } from "react-router-dom";

const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <UserProvider>
        <CssBaseline />
        <Story />
      </UserProvider>
    </BrowserRouter>
  </ThemeProvider>
);

export const decorators = [withMuiTheme];

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: "todo" },
    layout: "centered",
  },
};

export default preview;
