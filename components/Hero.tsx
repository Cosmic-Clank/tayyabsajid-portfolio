import React from "react";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import profile from "@/public/images/profile.jpg";
import { Boxes } from "./ui/BackgroundBoxes";
import SocialsButton from "./ui/SocialsButton";

import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { BackgroundGradientAnimation } from "./ui/BackgroundGradientAnimation";

const Hero = () => {
	return (
		<div className='pb-20 pt-36'>
			<div>
				<Spotlight className='md:-top-96 md:left-[20%] lg:-top-80 lg:left-[30%] sm:-top-80 sm:left-[20%] -top-52 left-[20%] h-screen' fill='white' />
				<Spotlight className='md:-top-36 md:left-[30%] sm:-top-36 sm:left-[24%] -top-16 left-[20%] h-[80vh] w-[50vw]' fill='blue' />
				<Spotlight className='md:-top-36 md:left-[35%] sm:-top-36 sm:left-[27%] -top-16 left-[25%] h-[80vh] w-[50vw]' fill='purple' />
			</div>
			<Boxes className='opacity-15' />
			<BackgroundGradientAnimation containerClassName='opacity-15' />

			<div className='flex flex-col md:flex-row text-center md:text-left justify-around items-center relative my-20 z-10 gap-10 pointer-events-none'>
				<div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-centers items-center text-center gap-4'>
					<h2 className='tracking-widest text-xl text-blue-100 max-w-sm'>Hello, I'm</h2>
					<TextGenerateEffect className='text-6xl lg:text-8xl' words='Tayyab Sajid' />
					<h2 className='tracking-widest text-xl text-blue-100 max-w-sm'>A Developer, Cybersecurity Enthusiast & AI-Robotics Aficionado</h2>
					<div className='flex gap-2'>
						<SocialsButton className='pointer-events-auto hover:rotate-12 transition-transform' label='' icon={<FaLinkedinIn className='text-[#0b66c2]' />} position='left' />
						<SocialsButton className='pointer-events-auto hover:rotate-12 transition-transform' label='' icon={<FaInstagram className='text-[#C13584]' />} position='left' />
						<SocialsButton className='pointer-events-auto hover:rotate-12 transition-transform' label='' icon={<FaWhatsapp className='text-[#25D366]' />} position='left' />
						<SocialsButton className='pointer-events-auto hover:rotate-12 transition-transform' label='' icon={<FaGithub className='text-white' />} position='left' />
						<SocialsButton className='pointer-events-auto hover:rotate-12 transition-transform' label='' icon={<IoMailOpenOutline className='text-red-600' />} position='left' />
					</div>
				</div>
				{/* <Image src={profile} width={300} height={300} alt='Picture of the author' className='rounded-full' /> */}
			</div>
		</div>
	);
};

export default Hero;
