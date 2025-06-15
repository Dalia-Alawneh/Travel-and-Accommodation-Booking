import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Login from "./areas/user/pages/Login";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Login />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
