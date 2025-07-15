import { useNavigate } from "react-router";
import ErrorPage from "../Error";
import { serverError } from "@travelia/assets";

const ServerError = () => {
  const navigate = useNavigate();
  const handleBackToHome = () => {
    navigate("/");
  };
  return (
    <ErrorPage
      title="Sorry, something went wrong:("
      caption={`We are working on it to fix it`}
      image={serverError}
      onClick={handleBackToHome}
    />
  );
};

export default ServerError;
