import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://backend-1n59.onrender.com",
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
