// src/context/CartContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../src/utils/axiosInstance";
import { UserContext } from "./UserContext";
import toast from "react-hot-toast";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const { user } = useContext(UserContext);
	const [cartItems, setCartItems] = useState([]);

	const fetchCart = async () => {
		if (!user) return;
		try {
			const response = await axiosInstance.get("/get-cart");
			setCartItems(response.data.cartData || []);
		} catch (error) {
			console.error("Error fetching cart:", error);
		}
	};

	useEffect(() => {
		fetchCart();
	}, [user]);

	const addToCart = async (item) => {
		try {
			const existing = [...cartItems];
			const index = existing.findIndex((i) => i.title === item.title);

			if (index !== -1) {
				existing[index].quantity += item.quantity;
			} else {
				existing.push(item);
			}

			await axiosInstance.put("/update-cart", { cartData: existing });
			setCartItems(existing);
            toast.success("Item added to cart")
		} catch (error) {
			console.error("Error adding to cart", error);
            toast.error("Failed to update cart")
		}
	};

	const removeFromCart = async (title) => {
		try {
			const updated = cartItems.filter((item) => item.title !== title);
			await axiosInstance.put("/update-cart", { cartData: updated });
			setCartItems(updated);
			toast.success("Item removed from cart")
		} catch (error) {
			console.error("Error removing from cart", error);
		}
	};

	const clearCart = async () => {
		try {
			await axiosInstance.put("/update-cart", { cartData: [] });
			setCartItems([]);
		} catch (error) {
			console.error("Error clearing cart", error);
		}
	};

	return (
		<CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, fetchCart }}>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
