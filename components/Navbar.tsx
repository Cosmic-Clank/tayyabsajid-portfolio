"use client";
import React from "react";
import { FloatingNav } from "./ui/FloatingNavbar";
import { AiOutlineHome } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { MdHomeRepairService } from "react-icons/md";

export default function FloatingNavDemo() {
	const navItems = [
		{
			name: "Home",
			link: "#hero",
			icon: <AiOutlineHome className='h-4 w-4 text-neutral-500 dark:text-white' />,
		},
		{
			name: "About",
			link: "#about",
			icon: <FiUser className='h-4 w-4 text-neutral-500 dark:text-white' />,
		},
		{
			name: "Services",
			link: "#services",
			icon: <MdHomeRepairService className='h-4 w-4 text-neutral-500 dark:text-white' />,
		},
	];
	return (
		<div className='relative w-full'>
			<FloatingNav className='bg-black-100 bg-opacity-40 backdrop-blur-sm' navItems={navItems} />
		</div>
	);
}
