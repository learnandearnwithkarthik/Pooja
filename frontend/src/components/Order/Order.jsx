import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { menu_list } from "../../data";
import MenuCard from "./MenuCard";
import { UserContext } from "../../../context/UserContext";
import axiosInstance from "../../utils/axiosInstance";

const Order = ({ setShowLogin }) => {
	const [category, setCategory] = useState("Coffee Selection");
	const [menuItems, setMenuItems] = useState([]);
	const { user } = useContext(UserContext);
	const [loading, setLoading] = useState(true); // Add loading state
	const navigate = useNavigate();

	// Redirect to login page if user is not logged in
	useEffect(() => {
		if (loading) return; // Don't run the check while loading
		if (!user && !localStorage.getItem("token")) {
			setShowLogin(true);
		}
	}, [user, navigate, loading]);

	// Update URL with the category query parameter
	useEffect(() => {
		navigate(`?category=${category}`);
	}, [category, navigate]);

	// Function to Fetch menu items based on category
	const fetchMenuItems = async (category) => {
		try {
			const response = await axiosInstance.get(
				`/get-items?category=${category}`
			);
			if (response.data && !response.data.error) {
				setMenuItems(response.data.items);
			}
		} catch (error) {
			console.log("Error fetching menu items:", error);
		}
	};

	// Re-render (fetch items) when category changes & Set loading state to false when the component is ready
	useEffect(() => {
		setLoading(false);
		fetchMenuItems(category);
	}, [category]);

	// If still loading or user is not logged in, return null to prevent rendering
	if (loading || (!user && !localStorage.getItem("token"))) {
		return null; // Avoid rendering if no user is logged in
	}

	return (
		<>
			{/* Order Navbar */}
			<div className="bg-secondary p-1">
				<ul className="flex list-none items-center justify-between my-1 mx-[150px]">
					{menu_list.map((item) => (
						<li
							key={item.menu_name}
							onClick={() => setCategory(item.menu_name)}
							className={`${
								category === item.menu_name
									? "text-primary"
									: "text-slate-100"
							}
                font-Source cursor-pointer text-lg hover:text-primary`}
						>
							{item.menu_name}
						</li>
					))}
				</ul>
			</div>

			{/* Order Card */}
			<div className="grid grid-cols-3 m-10 mx-20">
				{menuItems.map((item, index) => (
					<MenuCard
						key={index}
						imgSrc={item.image}
						title={item.name}
						description={item.description}
						price={item.price}
					/>
				))}
			</div>
		</>
	);
};

export default Order;
