// src/components/AdminNavbar.jsx

import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import toast from "react-hot-toast";
import { FaPlus, FaList } from "react-icons/fa";

const AdminNavbar = ({setShowlogin, setShowSignup}) => {
	const navigate = useNavigate();
	const { setUser } = useContext(UserContext);

	const onLogout = () => {
		localStorage.clear();
		setUser(null)
		navigate("/");
		setShowlogin(false)
		setShowSignup(false)
		toast.success("Logout successful");
	};

	return (
		<div className="flex min-h-screen">
			{/* Sidebar */}
			<div className="w-64 border-r border-slate-400 p-6 ">
				<h2 className="text-2xl font-bold mb-6 py-4 ">Admin Panel</h2>
				<ul className="space-y-4">
					<li
						className="flex items-center border border-slate-400 p-2 rounded-lg hover:bg-gray-200 cursor-pointer"
						onClick={() => navigate("/admin-add-item")}
					>
						<FaPlus className="mr-2" />
						Add Items
					</li>
					<li
						className="flex items-center border border-slate-400 p-2 rounded-lg hover:bg-gray-200 cursor-pointer"
						onClick={() => navigate("/admin-delete-item")}
					>
						<FaList className="mr-2" />
						List Items
					</li>
				</ul>
			</div>

			{/* Main content */}
			<div className="flex-1 flex flex-col min-h-screen">
				{/* Topbar */}
				<div className="w-full bg-transparent border-b border-border px-10 flex items-center justify-between h-[25px] text-sm">
					<span className="text-secondary font-Source">
						Tired? Let's have a cup of coffee.
					</span>
					<span className="text-secondary font-Source">
						Call us: +91 9087654321
					</span>
					<span className="text-secondary font-Source lg:block hidden">
						Our location: Bengaluru, India
					</span>
				</div>
				<div className="border-b  border-slate-400 px-10 py-3 flex justify-between items-center">
					<h1 className="text-3xl font-bold ">
						Bake & <span className="text-primary">Brew</span>
					</h1>
					<button
						onClick={onLogout}
						className="outline-none h-[30px] w-[100px] bg-primary rounded-[100px] font-Source text-white text-base  px-2 shadow-md"
					>
						Logout
					</button>
				</div>

				{/* Outlet for child routes */}
				<div className="px-6 py-2 flex-1 ">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default AdminNavbar;
