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

Axios.interceptors.request.use(attachTokenToRequest, onRequestError);

Axios.interceptors.response.use((response) => response, handleResponseError);

export default Axios;
