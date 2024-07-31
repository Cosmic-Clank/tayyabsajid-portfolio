"use client";
import { cn } from "@/lib/utils";
import React from "react";

const Heading = ({ title, titleSpan, className }: { title: string; titleSpan?: string; className?: string }) => {
	return (
		<h2 className={cn("text-5xl md:text-6xl lg:text-7xl font-bold w-full text-center px-5 mb-20", className)}>
			{title} <span className='text-sky-400'>{titleSpan}</span>
		</h2>
	);
};

export default Heading;
