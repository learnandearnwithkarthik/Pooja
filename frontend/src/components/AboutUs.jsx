import React from "react";
import aboutImage from "../assets/aboutImage.png";

const AboutUs = () => {
	return (
		<div
			className="w-full flex items-center lg:flex-row flex-col lg:px-[200px] px-4 mt-[180px]"
		>
			<img
				src={aboutImage}
				className="w-[400px] h-[400px]"
				alt="aboutImage"
			/>
			<div className="flex flex-col lg:items-start items-center">
				<span className="uppercase text-text font-Bebas text-[70px] tracking-wide">
					about us
				</span>
				<p className="text-sm font-Source font-light text-secondary lg:max-w-[550px] max-w-[95%] lg:text-left text-justify">
					Welcome to Bake & Brew, where we create delightful
					experiences with every cup of coffee and every dessert. At
					Brew & Bake, we are passionate about serving high-quality
					coffee and delicious treats that tantalize your taste buds.
					Our skilled baristas and bakers craft each item with care,
					ensuring perfect flavors and presentation. Whether you're
					here for a freshly brewed coffee or one of our delectable
					desserts, our offerings cater to both coffee enthusiasts and
					dessert lovers. Come and enjoy our cozy and inviting
					atmosphere while savoring the best we have to offer.
				</p>
			</div>
		</div>
	);
};

export default AboutUs;
