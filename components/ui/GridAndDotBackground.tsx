import React from "react";

const GridAndDotBackground = () => {
	return (
		<div className='h-screen w-screen dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] absolute top-0 flex items-center justify-center'>
			<div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
		</div>
	);
};

export default GridAndDotBackground;
