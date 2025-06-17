import Home from "@travelia/areas/user/pages/Home";
import Login from "@travelia/areas/user/pages/Login";
import { Route, Routes } from "react-router";

const AppRouter = () => {
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
