import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import ToasterContainer from "./components/Toaster";
import AppRouter from "./router";
import { UserProvider } from "./context/user";
import { ErrorBoundary } from "react-error-boundary";
import ServerError from "./pages/ServerError";
import { Suspense } from "react";
import AppLoader from "./components/AppLoader";

const queryClient = new QueryClient();

function App() {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ErrorBoundary fallback={<ServerError />}>
            <Suspense fallback={<AppLoader />}>
              <AppRouter />
            </Suspense>
          </ErrorBoundary>
          <ToasterContainer />
        </ThemeProvider>
      </QueryClientProvider>
    </UserProvider>
  );
}

export default App;
