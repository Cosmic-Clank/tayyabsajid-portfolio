import React from "react";

const SocialsButton = ({ label, icon, position, handleClick, className }: { label: string; icon: React.ReactNode; position: string; handleClick?: () => void; className?: string }) => {
	return (
		// Button code
		<button onClick={handleClick} className={`inline-flex animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#00010310,45%,#1e2631,55%,#00010310)] bg-[length:200%_100%] p-2 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${className}`}>
			{position === "left" && icon}
			{label}
			{position === "right" && icon}
		</button>
	);
};

export default SocialsButton;
