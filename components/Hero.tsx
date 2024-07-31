"use client";
import React from "react";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

import SocialsButton from "./ui/SocialsButton";

import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { FlipWords } from "./ui/FlipWords";
import SectionContainer from "./ui/SectionContainer";

const Hero = () => {
	return (
		<SectionContainer id='home' className='h-screen'>
			<div>
				<Spotlight className='md:-top-96 md:left-[20%] lg:-top-80 lg:left-[30%] sm:-top-80 sm:left-[20%] -top-52 left-[20%] h-screen' fill='white' />
				<Spotlight className='md:-top-36 md:left-[30%] sm:-top-36 sm:left-[24%] -top-16 left-[20%] h-[80vh] w-[50vw]' fill='blue' />
				<Spotlight className='md:-top-36 md:left-[35%] sm:-top-36 sm:left-[27%] -top-16 left-[25%] h-[80vh] w-[50vw]' fill='purple' />
			</div>

			<div className='flex flex-col md:flex-row text-center md:text-left justify-around items-center relative my-10 z-10 gap-10 sm:px-10 px-5'>
				<div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-centers items-center text-center gap-4'>
					<h2 className='tracking-widest text-xl text-blue-100 max-w-sm'>Hello, I'm</h2>
					<TextGenerateEffect className='text-6xl lg:text-8xl' words='Tayyab Sajid' />
					<h1 className='tracking-widest text-xl text-blue-100 max-w-sm'>
						I am a determined and passionate
						<br />
						<FlipWords duration={1500} words={["Developer", "Cybersecurity-Enthusiast", "AI/Robotics-Aficionado"]} />
					</h1>
					<div className='flex gap-2'>
						<SocialsButton href='https://www.linkedin.com/in/tayyabsajid/' className='pointer-events-auto hover:-translate-y-1 transition-transform' label='' icon={<FaLinkedinIn className='text-[#0b66c2]' />} position='left' />
						<SocialsButton href='https://www.instagram.com/cosmic_clank/' className='pointer-events-auto hover:-translate-y-1 transition-transform' label='' icon={<FaInstagram className='text-[#C13584]' />} position='left' />
						<SocialsButton href='https://wa.me/+971561831758' className='pointer-events-auto hover:-translate-y-1 transition-transform' label='' icon={<FaWhatsapp className='text-[#25D366]' />} position='left' />
						<SocialsButton href='https://github.com/Cosmic-Clank' className='pointer-events-auto hover:-translate-y-1 transition-transform' label='' icon={<FaGithub className='text-white' />} position='left' />
						<SocialsButton href='mailto:tayyabsajidq41321@gmail.com' className='pointer-events-auto hover:-translate-y-1 transition-transform' label='' icon={<IoMailOpenOutline className='text-red-600' />} position='left' />
					</div>
				</div>
				{/* <Image src={profile} width={300} height={300} alt='Picture of the author' className='rounded-full' /> */}
			</div>
		</SectionContainer>
	);
};

export default Hero;
