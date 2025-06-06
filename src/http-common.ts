import axios, {type AxiosInstance } from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/';

if (!import.meta.env.VITE_API_URL && import.meta.env.MODE === 'production') {
    console.warn("⚠️ Warning: VITE_API_URL is not set in the .env file.");
}

// Initial headers – no auth here; handled in interceptor
const headers: { "Content-type": string } = {
    "Content-type": "application/json"
};

// Create Axios instance
export const api: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers
});

// Request interceptor to inject token
api.interceptors.request.use(
    (config) => {
        const token = cookies.get("authorization");
        if (token && config.headers) {
            config.headers.set?.('Authorization', `Bearer ${token}`);
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor to handle 401
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            cookies.remove("authorization");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);
