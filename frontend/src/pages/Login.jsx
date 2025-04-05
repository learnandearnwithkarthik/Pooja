import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../components/input/PasswordInput";
import { validateEmail } from "../utils/Helper";
import SignUp from "./SignUp";
import toast from "react-hot-toast";
import axiosInstance from "../../../backend/utils/axiosInstance";
import { UserContext } from "../../context/UserContext"; // Import UserContext

const Login = ({ setShowLogin }) => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);
    const [showSignUp, setShowSignUp] = useState(false);
    const [isChecked, setIsChecked] = useState(false); // State for checkbox
    const navigate = useNavigate();
    const {user, setUser } = useContext(UserContext); // Get setUser from context

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = data;

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (!password) {
            setError("Please enter a password");
            return;
        }

        if (!isChecked) {
            setError("You must agree to the terms and conditions to log in.");
            return; // Stop the form submission if checkbox is not checked
        }

        setError("");

        //Login API call
        try {
            const response = await axiosInstance.post("/login", {
                email,
                password,
            });
            if (response.data && response.data.error) {
                toast.error(response.data.message);
            }

            if (response.data && response.data.accessToken) {
                localStorage.setItem("token", response.data.accessToken);
            
                const userResponse = await axiosInstance.get("/get-user");
                if (userResponse.data && userResponse.data.user) {
                    const loggedInUser = userResponse.data.user;
                    setUser(loggedInUser); // ✅ update context
            
                    setData({ email: "", password: "" });
            
                    if (loggedInUser.role === "admin") {
                        navigate("/admin-add-item");
                    } else {
                        navigate("/");
                    }
            
                    toast.success("Login successful!");
                    setShowLogin(false);
                }
            }
            
        } catch (error) {
            console.log(error);
            toast.error("Login failed!");
        }
    };

    if (showSignUp) {
        return <SignUp setShowSignUp={setShowSignUp} setShowLogin={setShowLogin} />;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-600 bg-opacity-50 z-50 backdrop-blur-sm h-screen">
            <div className="w-full max-w-[350px] p-6 bg-white border border-gray-300 rounded-lg shadow-md">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 text-right">
                        <button
                            type="button"
                            onClick={() => { setShowLogin(false); navigate("/"); }}
                            className="text-gray-500 text-xl hover:text-gray-800"
                        >
                            &times;
                        </button>
                    </div>
                    <h4 className="text-4xl text-text font-Bebas mb-6 text-center">Login</h4>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                            value={data.email}
                            onChange={(e) =>
                                setData({ ...data, email: e.target.value })
                            }
                        />
                    </div>
                    <div className="mb-4">
                        <PasswordInput
                            className = ""
                            value={data.password}
                            onChange={(e) =>
                                setData({ ...data, password: e.target.value })
                            }
                        />
                    </div>
                    {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
                    <button
                        type="submit"
                        className="w-full py-2 cursor-pointer bg-primary text-white rounded hover:bg-primary-dark transition duration-200"
                    >
                        Login
                    </button>
                    <div className="mt-4 text-center">
                        <input 
                            type="checkbox" 
                            className="mr-2 cursor-pointer w-4 h-4"                             
                            checked={isChecked} 
                            onChange={() => setIsChecked(!isChecked)} // Toggle checkbox state
                        />
                        <span className="text-sm">
                            By continuing, I agree to the terms of use & privacy policy.
                        </span>
                    </div>
                    <p className="mt-4 text-center text-sm">
                        Create a new account?{" "}
                        <span
                            onClick={() => setShowSignUp(true)}
                            className="text-primary hover:underline cursor-pointer"
                        >
                            Click here
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
