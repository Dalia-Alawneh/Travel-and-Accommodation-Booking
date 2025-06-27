import toast from "react-hot-toast";
import { AxiosError, InternalAxiosRequestConfig } from "axios";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "@travelia/utils/localstorage";
import { TOKEN_KEY, USER } from "@travelia/constants";
import { ErrorResponse } from "./types";

export const attachTokenToRequest = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  const token = getFromLocalStorage<string>(TOKEN_KEY);

  if (token) {
    config.headers?.set("Authorization", `Bearer ${token}`);
  }

  return config;
};

export const onRequestError = (error: AxiosError) => Promise.reject(error);

const clearCredentials = () => {
  removeFromLocalStorage(TOKEN_KEY);
  removeFromLocalStorage(USER);
};

const handleUnAuthResponse = () => {
  clearCredentials();
  toast.error("Unauthorized - redirect to login...", { duration: 5000 });
  setTimeout(() => {
    window.location.href = "/login";
  }, 1500);
};

export const handleResponseError = (error: AxiosError) => {
  const status = error.response?.status;
  const serverMessage = (error.response?.data as ErrorResponse)?.message;
  switch (status) {
    case 400:
      console.error("Bad Request:", serverMessage || error.message);
      break;

    case 401:
      handleUnAuthResponse();
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
      window.location.href = "/500";
      break;

    default:
      console.error("Unknown error:", error);
      toast.error("An unexpected error occurred.");
  }

  return Promise.reject(error);
};
