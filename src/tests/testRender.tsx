import React, { ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { persistor, store } from "@travelia/app/store";
import { UserProvider } from "@travelia/context/user";
import theme from "@travelia/theme";
const queryClient = new QueryClient();

const AllProviders = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter>
          <UserProvider>
            <QueryClientProvider client={queryClient}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
              </ThemeProvider>
            </QueryClientProvider>
          </UserProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

const testRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export { testRender as render };
