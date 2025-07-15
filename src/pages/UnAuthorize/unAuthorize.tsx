import { unAuth } from "@travelia/assets";
import ErrorPage from "../Error";
import { useNavigate } from "react-router";

const UnAuthorize = () => {
  const navigate = useNavigate();
  const handleBackToLogin = () => {
    navigate("/login");
  };
  return (
    <ErrorPage
      title="You are not allowed to access!"
      caption={``}
      image={unAuth}
      onClick={handleBackToLogin}
    />
  );
};

export default UnAuthorize;
