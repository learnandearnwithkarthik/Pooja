import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../src/utils/axiosInstance";

// Create context
export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Function to get user info if logged in
    const getUserInfo = async () => {
        try {
            const response = await axiosInstance.get("/get-user");
            if (response.data && response.data.user) {
                setUser(response.data.user);
            }
        } catch (error) {
            console.log(error);
            setUser(null); // Ensure user is cleared on error
        }
    };

    // Fetch user information if token exists
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            getUserInfo();
        }
    }, []); // Only runs once on mount

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
