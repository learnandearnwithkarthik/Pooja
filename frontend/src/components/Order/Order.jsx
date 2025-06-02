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
		const loadMenu = async () => {
			await fetchMenuItems(category); // Wait for data
			setLoading(false); // Only stop loading after data is ready
		};

		loadMenu();
	}, [category]);

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
			{loading ? (
				<div className="col-span-3 flex justify-center items-center min-h-[300px]">
					<div className="spinner"></div>
				</div>
			) : menuItems.length > 0 ? (
				menuItems.map((item, index) => (
					<MenuCard
						key={index}
						imgSrc={item.image}
						title={item.name}
						description={item.description}
						price={item.price}
						setShowLogin={setShowLogin}
					/>
				))
			) : (
				<div className="col-span-3 text-center text-gray-500 text-lg self-center">
					No items found for this category.
				</div>
			)}
		</>
	);
};

export default Order;
