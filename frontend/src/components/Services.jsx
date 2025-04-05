import { services } from "../data";

const Services = () => {
	return (
		<div id="services" className="w-full flex lg:flex-row flex-col lg:gap-0 gap-8 items-center justify-between lg:px-[180px] px-5 mt-[80px]">
			{services.map((item) => (
				<div
					key={item.title}
					className="flex flex-col items-center justify-center"
				>
					<img className="w-[50px] h-[50px] "
						src={item.icon}
						alt={item.title}
					/>
					<span className="fount-Source text-secondary text-[20px] text-center mt-3">
						{item.title}
					</span>
					<p className="text-center font-Source text-secondary font-light max-w-[250px] mt-1">
						{item.description}
					</p>
				</div>
			))}
		</div>
	);
};

export default Services;