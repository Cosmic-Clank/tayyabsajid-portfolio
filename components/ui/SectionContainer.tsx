import { cn } from "@/lib/utils";
import React from "react";

const SectionContainer = ({ className, id, children }: { className?: string; id?: string; children: React.ReactNode }) => {
	return (
		<>
			<section id={id} className={cn("py-20 flex flex-col justify-center items-center relative max-w-7xl w-full px-6", className)}>
				{children}
			</section>
			<hr className='my-12 mx-auto w-3/4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10' />
		</>
	);
};

export default SectionContainer;
