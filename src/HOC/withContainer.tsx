import { Container, ContainerProps } from "@mui/material";
import { ComponentType } from "react";

interface WithContainerOptions {
  maxWidth?: ContainerProps["maxWidth"];
  sx?: ContainerProps["sx"];
}

const withContainer = <P extends object>(
  Component: ComponentType<P>,
  options?: WithContainerOptions,
): ComponentType<P> => {
  const { maxWidth = "lg", sx = { my: 10 } } = options || {};

  return (props: P) => (
    <Container maxWidth={maxWidth} sx={sx}>
      <Component {...props} />
    </Container>
  );
};

export default withContainer;
