import React, { useContext, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { UserContext } from "../../../context/UserContext";
import { useCart } from "../../../context/CartContext";

const MenuCard = ({ imgSrc, title, description, price, handleDelete }) => {
	const [quantity, setQuantity] = useState(1);
	const { user } = useContext(UserContext);
	const {addToCart} = useCart()

	const isAdmin = user?.role === "admin";

	const handleQuantityChange = (event) => {
		setQuantity(Number(event.target.value)); // Convert to number
	};

	const handleAddToCart = () => {
		const item = { title, description, imgSrc, price, quantity };
		addToCart(item);
		setQuantity(1)
	};

	return (
		<div className="w-[420px] font-Source bg-white rounded-md shadow-md overflow-hidden mx-2 my-2 relative">
			<div className="md:flex">
				<div className="md:flex-shrink-0">
					<img
						className="h-[100px] w-[100px] m-4 rounded-full"
						src={imgSrc}
						alt={title}
					/>
				</div>
				<div className="p-4">
					<div className="block mt-1 text-base leading-tight font-medium text-text">
						{title}
					</div>
					<p className="mt-2 text-sm text-gray-500">{description}</p>
					<div className="mt-4 flex items-center justify-between">
						<span className="text-sm font-semibold text-gray-900">
							₹ {price}
						</span>
						<div className="flex items-center">
							<input
								type="number"
								min="1"
								value={quantity}
								onChange={handleQuantityChange}
								className="w-10 h-8 p-1 text-center border rounded mx-4"
							/>
							<button
								className="outline-none h-[30px] w-[100px] bg-primary rounded-[100px] font-Source text-white text-sm uppercase px-2"
								onClick={handleAddToCart}
							>
								Add Item
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* Delete Icon */}
			{isAdmin && handleDelete && (
				<div
					onClick={handleDelete}
					className="absolute top-4 right-4 text-red-500 text-xl cursor-pointer"
				>
					<MdDeleteForever />
				</div>
			)}
		</div>
	);
};

export default MenuCard;
