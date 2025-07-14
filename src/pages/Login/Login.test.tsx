import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Login from "./Login";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store, persistor } from "@travelia/app/store";
import { UserProvider } from "@travelia/context/user";
import theme from "@travelia/theme";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const renderLoginWithProviders = (history = createMemoryHistory()) => {
  const queryClient = new QueryClient();

  return {
    history,
    ...render(
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Router location={history.location} navigator={history}>
            <UserProvider>
              <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <Login />
                </ThemeProvider>
              </QueryClientProvider>
            </UserProvider>
          </Router>
        </PersistGate>
      </Provider>,
    ),
  };
};

describe("Login Integration Test", () => {
  it("should login successfully with User type then navigate to /user", async () => {
    const { history } = renderLoginWithProviders();

    fireEvent.change(screen.getByPlaceholderText(/Enter Username/i), {
      target: { value: "user" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter Password/i), {
      target: { value: "user" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Login/i }));
    await waitFor(
      () => {
        expect(history.location.pathname).toBe("/user");
      },
      { timeout: 2000 },
    );
  });

  it("should login successfully with Admin type then navigate to /admin", async () => {
    const { history } = renderLoginWithProviders();

    fireEvent.change(screen.getByPlaceholderText(/Enter Username/i), {
      target: { value: "admin" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Enter Password/i), {
      target: { value: "admin" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Login/i }));
    await waitFor(
      () => {
        expect(history.location.pathname).toBe("/admin");
      },
      { timeout: 2000 },
    );
  });
});
