import React, { useState } from "react";
import { validateEmail } from "../utils/Helper";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../backend/utils/axiosInstance";
import { toast } from "react-hot-toast";

const SignUp = ({ setShowSignUp, setShowLogin }) => {
	const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleSignUp = async (e) => {
		e.preventDefault();
		const { name, email, password } = data;

		if (!name) {
			setError("Please enter your name");
			return;
		}

		if (!validateEmail(email)) {
			setError("Please enter a valid email address.");
			return;
		}

		if (!password || password.length < 6) {
			setError("Please enter at least 6 characters for password.");
			return;
		}

		setError("");

		// Handle sign-up logic here
		try {
			const response = await axiosInstance.post("/register", {
				name,
				email,
				password,
			});

			if (response.data && response.data.error) {
				toast.error(response.data.message);
			}

			if (response.data && response.data.accessToken) {
				localStorage.setItem("token", response.data.accessToken);
				setData({ email: "", password: "" });
				navigate("/");
				toast.success("Login successful!");
				setShowLogin(false);
			}
		} catch (error) {
			console.error(error);
			toast.error("Sign up failed. Please try again.");
		}
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-slate-600 bg-opacity-50 z-50 backdrop-blur-sm h-screen">
			<div className="w-full max-w-[350px] p-6 bg-white border border-gray-300 rounded-lg shadow-md">
				<form onSubmit={handleSignUp}>
					<div className="mb-4 text-right">
						<button
							type="button"
							onClick={() => { setShowLogin(false); navigate("/"); }}
							className="text-gray-500 text-xl hover:text-gray-800"
						>
							&times;
						</button>
					</div>
					<h4 className="text-4xl font-Bebas text-text mb-7 text-center">
						Sign Up
					</h4>

					<div className="mb-4">
						<input
							type="text"
							placeholder="Name"
							className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
							value={data.name}
							onChange={(e) =>
								setData({ ...data, name: e.target.value })
							}
						/>
					</div>

					<div className="mb-4">
						<input
							type="text"
							placeholder="Email"
							className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
							value={data.email}
							onChange={(e) =>
								setData({ ...data, email: e.target.value })
							}
						/>
					</div>

					<div className="mb-4">
						<input
							type="password"
							placeholder="Password"
							className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
							value={data.password}
							onChange={(e) =>
								setData({ ...data, password: e.target.value })
							}
						/>
					</div>

					{error && (
						<p className="text-red-500 text-xs pb-1">{error}</p>
					)}

					<button
						type="submit"
						className="w-full py-2 bg-primary text-white rounded hover:bg-primary-dark transition duration-200"
					>
						Create Account
					</button>

					<p className="text-sm text-center mt-4">
						Already have an account?{" "}
						<span
							onClick={() => {
								setShowSignUp(false);
								setShowLogin(true);
							}}
							className="text-primary hover:underline cursor-pointer"
						>
							Login
						</span>
					</p>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
