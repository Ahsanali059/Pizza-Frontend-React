import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

//allow cookies to send with the request 

axiosInstance.defaults.withCredentials = true;

export default axiosInstance;


