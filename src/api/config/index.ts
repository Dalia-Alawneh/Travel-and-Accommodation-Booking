import axios from "axios";
import {
  attachTokenToRequest,
  handleResponseError,
  onRequestError,
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
  const key =
    config.url + JSON.stringify(config.params) + JSON.stringify(config.data);
  const prevController = controllers.get(key);
  if (prevController) {
    prevController.abort();
  }

  const controller = new AbortController();
  controllers.set(key, controller);

  config.signal = controller.signal;

  return attachTokenToRequest(config);
}, onRequestError);

Axios.interceptors.response.use(
  (response) => {
    const key =
      response.config.url +
      JSON.stringify(response.config.params) +
      JSON.stringify(response.config.data);
    controllers.delete(key);
    return response;
  },
  (error) => {
    if (error.config) {
      const key =
        error.config.url +
        JSON.stringify(error.config.params) +
        JSON.stringify(error.config.data);
      controllers.delete(key);
    }
    return handleResponseError(error);
  },
);

export default Axios;
