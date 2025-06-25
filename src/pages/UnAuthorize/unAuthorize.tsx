import { unAuth } from "@travelia/assets";
import ErrorPage from "../Error";

const UnAuthorize = () => {
  return (
    <ErrorPage
      title="You are not allowed to access!"
      caption={``}
      image={unAuth}
    />
  );
};

export default UnAuthorize;
