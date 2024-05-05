import axios, { AxiosRequestConfig, AxiosHeaders } from "axios";

const Http = axios.create();

Http.interceptors.request.use(
    async (config: any) => {
        config.headers = config.headers || {}; // Ensure headers is not undefined
        config.headers['Content-Type'] = 'application/json';
        return config; // Return the modified config object
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

export default Http;