import { Toaster } from "react-hot-toast";

const ToasterContainer = () => {
  return (
    <Toaster
      position="top-center"
      gutter={8}
      toastOptions={{
        duration: 5000,
        removeDelay: 1000,
      }}
    />
  );
};

export default ToasterContainer;
