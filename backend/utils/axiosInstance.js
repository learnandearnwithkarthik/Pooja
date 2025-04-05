import axios from "axios";
import { BASE_URL } from "./constants";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    // withCredentials: true, // ✅ Ensure credentials are included
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");  // Get token from localStorage
//        console.log("Access Token:", accessToken);  // Debugging

        if (accessToken) {
            config.headers = {
                ...config.headers,
                authorization: `Bearer ${accessToken}`,  // ✅ Add token here
            };
        }

//        console.log("Request Headers:", config.headers);  // Debugging
        return config;
    },
    (error) => Promise.reject(error)
);


export default axiosInstance;
