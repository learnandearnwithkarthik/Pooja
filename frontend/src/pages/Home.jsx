import React from "react";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Menu from "../components/Menu";
import Comment from "../components/Comments";

const Home = () => {
	return (
		<div>
			<Header />
			<AboutUs />
			<Services />
			<Menu />
			<Comment />
		</div>
	);
};

export default Home;
