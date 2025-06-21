import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./areas/user/pages/Home";
import theme from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
