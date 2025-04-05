import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import toast from "react-hot-toast";
import { useCart } from "../../context/CartContext";
import { MdFastfood } from "react-icons/md";

const Cart = ({ setShowLogin }) => {
	const { user } = useContext(UserContext);
	const navigate = useNavigate();
	const { cartItems, removeFromCart, fetchCart, clearCart } = useCart();

	useEffect(() => {
		if (!user && !localStorage.getItem("token")) {
			setShowLogin(true);
		}
	}, [user, navigate]);

	useEffect(() => {
		fetchCart();
	}, []);

	const subtotal = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	const deliveryFee = 2;
	const total = subtotal + deliveryFee;

	return (
		<div className="mx-36 my-10">
			<div className="flex flex-col">
				{cartItems.length <= 0 ? (
					<div className="text-center text-xl font-Source py-10 text-secondary flex flex-col items-center gap-2">
						<MdFastfood className="text-9xl text-b " />
						<span>
							Nothing brewing in your cart yet! Explore our menu and fill it up with your favorites.
						</span>
					</div>
				) : (
					<div>
						{/* Headers */}
						<div className="flex justify-between items-center font-bold uppercase text-sm border-b py-2">
							<div className="flex-1">Items</div>
							<div className="flex-1">Title</div>
							<div className="flex-1">Price</div>
							<div className="flex-1">Quantity</div>
							<div className="flex-1">Total</div>
							<div className="flex-1 text-center">Remove</div>
						</div>

						{/* Cart Items */}
						{cartItems.map((item) => (
							<div
								key={item.title}
								className="flex justify-between items-center border-b gap-2 "
							>
								<div className="flex-1 ">
									<img
										className="h-[60px] w-[60px] rounded-full"
										src={item.imgSrc}
										alt={item.title}
									/>
								</div>
								<div className="flex-1">{item.title}</div>
								<div className="flex-1">₹{item.price}</div>
								<div className="flex-1">{item.quantity}</div>
								<div className="flex-1">
									₹{(item.price * item.quantity).toFixed(2)}
								</div>
								<div className="flex-1 text-center">
									<button
										onClick={() => removeFromCart(item.title)}
										className="text-red-500 hover:text-red-700 text-xl"
									>
										x
									</button>
								</div>
							</div>
						))}
					</div>
				)}
			</div>

			{/* Cart Totals */}
			{cartItems.length > 0 && (
				<div className="my-12 flex flex-col lg:flex-row justify-between">
					<div className="lg:w-2/5">
						<h2 className="font-bold text-lg mb-2">Cart Totals</h2>
						<div className="flex justify-between border-b py-2">
							<span>Sub Total</span>
							<span>₹{subtotal.toFixed(2)}</span>
						</div>
						<div className="flex justify-between border-b py-2">
							<span>Delivery Fee</span>
							<span>₹{deliveryFee}</span>
						</div>
						<div className="flex justify-between font-bold py-2">
							<span>Total</span>
							<span>₹{total.toFixed(2)}</span>
						</div>
						<Button
							onClick={() => {
								toast.success("Order placed successfully");
								clearCart();
							}}
							className="rounded-lg"
						>
							PLACE ORDER
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
