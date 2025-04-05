import React from 'react'

const Button = ({ children, className,onClick }) => {
	return (
		<button
			className={`${className} outline-none h-[36px] bg-primary rounded-[100px] font-Source text-white text-md tracking-wider uppercase w-fit px-7`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button