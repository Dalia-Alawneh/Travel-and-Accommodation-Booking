import axios from "axios";
import {
  attachAbortSignal,
  attachTokenToRequest,
  handleResponseError,
  onRequestError,
  removeRequestSignal,
} from "./interceptors";

const Axios = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const controllers = new Map<string, AbortController>();

Axios.interceptors.request.use((config) => {
  config = attachAbortSignal(config, controllers);

  return attachTokenToRequest(config);
}, onRequestError);

Axios.interceptors.response.use(
  (response) => {
    removeRequestSignal(response.config, controllers);
    return response;
  },
  (error) => {
    if (error.config) {
      removeRequestSignal(error.config, controllers);
    }
    return handleResponseError(error);
  },
);

export default Axios;
