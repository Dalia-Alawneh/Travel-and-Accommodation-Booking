import axios from "axios";
import { handleResponseError } from "./interceptors";

const Axios = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

Axios.interceptors.response.use((response) => response, handleResponseError);

export default Axios;
