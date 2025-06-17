import { Toaster } from "react-hot-toast";

const ToasterContainer = () => {
  return (
    <Toaster
      position="top-center"
      gutter={8}
      toastOptions={{
        duration: 5000,
        removeDelay: 1000,
        style: {
          fontSize: "14px",
          padding: "8px 16px",
          maxWidth: "300px",
        },
      }}
    />
  );
};

export default ToasterContainer;
