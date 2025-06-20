import Home from "@travelia/areas/user/pages/Home";
import Login from "@travelia/pages/Login";
import { TOKEN_KEY } from "@travelia/fixtures";
import { getFromLocalStorage } from "@travelia/utils";
import { Route, Routes } from "react-router";

const AppRouter = () => {
  const isAuthenticated: string | null = getFromLocalStorage(TOKEN_KEY);

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
