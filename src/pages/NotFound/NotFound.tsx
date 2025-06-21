import { notFound } from "@travelia/assets";
import ErrorPage from "../Error";

const NotFound = () => {
  return (
    <ErrorPage
      title="Oops!"
      caption={`You're lost!, page not found`}
      image={notFound}
    />
  );
};

export default NotFound;
