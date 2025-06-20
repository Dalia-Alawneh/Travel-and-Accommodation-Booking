import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import ToasterContainer from "./components/Toaster";
import AppRouter from "./router";
import { UserProvider } from "./context/user";

const queryClient = new QueryClient();

function App() {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppRouter />
          <ToasterContainer />
        </ThemeProvider>
      </QueryClientProvider>
    </UserProvider>
  );
}

export default App;
