import React, { useState, useContext, useEffect } from "react";
import reservation from "../assets/reservation.png";
import Button from "./Button";
import toast from "react-hot-toast";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Reservation = ({setShowLogin}) => {
	const [noOfPeople, setNoOfPeople] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const { user } = useContext(UserContext); // Access the user context
	const navigate = useNavigate();

	// Check if the user exists in localStorage or sessionStorage
	useEffect(() => {
		// If no user and not logged in, redirect to login
		if (!user && !localStorage.getItem("token")) {
			setShowLogin(true);
		}
	}, [user, navigate]);

	const handleReservation = () => {
		// Basic validation
		if (!noOfPeople || !date || !time) {
			toast.error("Please fill in all fields.");
			return;
		}

		// Validate that the date is not in the past
		const selectedDate = new Date(date);
		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0); // Set current date to 00:00 to avoid time comparison issues

		if (selectedDate < currentDate) {
			toast.error("Date cannot be in the past.");
			return;
		}
		setDate("")
		setNoOfPeople("")
		setTime("")

		toast.success("Table reserved!");
	};

	return (
		<div className="w-full flex lg:flex-row flex-col items-center lg:h-[480px] my-[50px]">
			<img
				src={reservation}
				alt="reservation"
				className="lg:w-[45%] w-full h-full"
			/>
			<div className="w-full h-full bg-backgrounds flex items-center justify-center flex-col lg:p-0 p-8">
				<div className="flex flex-col">
					<span className="uppercase text-[80px] tracking-wide font-Bebas text-text">
						reservation
					</span>
					<p className="font-Source text-base font-light text-secondary max-w-[500px]">
						Reserve your spot at Bake & Brew to enjoy a delightful
						and memorable experience. Whether it's a special
						occasion or just a cozy outing, book a table today to
						ensure you don't miss out on our exceptional coffee and
						delectable desserts.
					</p>
					<div className="flex flex-col gap-3 mt-8">
						<input
							type="number"
							placeholder="No of People"
							value={noOfPeople}
							onChange={(e) => setNoOfPeople(e.target.value)}
							min="1" // Set minimum value to 1
							className="border-0 border-b pb-2 border-inputBorder bg-transparent outline-none font-Source text-base font-light placeholder:font-semibold text-secondary"
							aria-label="Number of people"
						/>
						<input
							type="date"
							value={date}
							onChange={(e) => setDate(e.target.value)}
							className="border-0 border-b pb-2 border-inputBorder bg-transparent outline-none font-Source text-base font-light placeholder:font-semibold text-secondary"
							aria-label="Reservation date"
							min={new Date().toISOString().split("T")[0]} // Set min date to today
						/>
						<input
							type="time"
							value={time}
							onChange={(e) => setTime(e.target.value)}
							className="border-0 border-b pb-2 border-inputBorder bg-transparent outline-none font-Source text-base font-light placeholder:font-semibold text-secondary"
							aria-label="Reservation time"
						/>
					</div>
					<Button onClick={handleReservation} className="mt-10">
						Find a table
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Reservation;
