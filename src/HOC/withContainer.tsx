import { Container } from "@mui/material";
import { ComponentType } from "react";

const withContainer = <P extends object>(
  Component: ComponentType<P>,
): ComponentType<P> => {
  return (props: P) => (
    <Container maxWidth="lg" sx={{ my: 10 }}>
      <Component {...props} />
    </Container>
  );
};

export default withContainer;
