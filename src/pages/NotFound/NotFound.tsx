import { notFound } from "@travelia/assets";
import ErrorPage from "../Error";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <ErrorPage
      title="Oops!"
      caption={`You're lost!, page not found`}
      image={notFound}
      onClick={handleBackToHome}
    />
  );
};

export default NotFound;
