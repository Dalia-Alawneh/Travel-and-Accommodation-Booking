import withContainer from "@travelia/HOC/withContainer";
import { ReactNode } from "react";

const Main = withContainer(({ children }: { children: ReactNode }) => {
  return <main>{children}</main>;
});

export default Main;
