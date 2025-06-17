import toast from "react-hot-toast";
import Axios from ".";
import { AxiosError } from "axios";

Axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

type ErrorResponse = {
  message?: string;
};

export const handleResponseError = (error: AxiosError) => {
  const status = error.response?.status;
  const serverMessage = (error.response?.data as ErrorResponse)?.message;
  switch (status) {
    case 400:
      console.error("Bad Request:", serverMessage || error.message);
      break;

    case 401:
      toast.error("Unauthorized - redirect to login...");
      break;

    case 403:
      console.error(
        "Forbidden:",
        serverMessage || "You don't have permission to access this resource.",
      );
      toast.error("Access denied");
      break;

    case 409:
      console.error("Conflict error:", serverMessage || "Conflict occurred.");
      toast.error("Conflict error");
      break;

    case 500:
    case 502:
    case 503:
      console.error(
        "Server error:",
        serverMessage || "An error occurred on the server.",
      );
      toast.error("Server error. Please try again later.");
      break;

    default:
      console.error("Unknown error:", error);
      toast.error("An unexpected error occurred.");
  }

  return Promise.reject(error);
};
