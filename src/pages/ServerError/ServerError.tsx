import ErrorPage from "../Error";
import { serverError } from "@travelia/assets";

const ServerError = () => {
  return (
    <ErrorPage
      title="Sorry, something went wrong:("
      caption={`We are working on it to fix it`}
      image={serverError}
    />
  );
};

export default ServerError;
