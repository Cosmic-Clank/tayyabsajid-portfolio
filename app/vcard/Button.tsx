"use client";
import { HoverBorderGradient } from "@/components/ui/HoverBorderGradient";
import React from "react";
import { IoPersonAddSharp } from "react-icons/io5";

const Button = () => {
	return (
		<HoverBorderGradient
			onClick={(event) => {
				event.preventDefault();
				window.location.href = "/api/vcard";
			}}
			containerClassName='rounded-full'
			as='button'
			className='bg-black-100 flex items-center px-24 py-4'>
			Save Contact
			<span>
				<IoPersonAddSharp className='ml-3' size={"18"} />
			</span>
		</HoverBorderGradient>
	);
};

export default Button;
