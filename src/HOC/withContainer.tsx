import { Container } from "@mui/material";
import { ComponentType, FC } from "react";

const withContainer =
  <P extends JSX.IntrinsicAttributes>(Component: ComponentType<P>): FC<P> =>
  (props) => (
    <Container maxWidth="lg" sx={{ my: 10 }}>
      <Component {...props} />
    </Container>
  );

export default withContainer;
