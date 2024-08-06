"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FlipWords } from "./ui/FlipWords";
import SectionContainer from "./ui/SectionContainer";
import SocialButtons from "./ui/SocialButtons";

const Hero = () => {
	return (
		<SectionContainer id='home' className='h-screen'>
			<div>
				<Spotlight className='md:-top-96 md:left-[20%] lg:-top-80 lg:left-[30%] sm:-top-80 sm:left-[20%] -top-52 left-[20%] h-screen' fill='white' />
				<Spotlight className='md:-top-36 md:left-[30%] sm:-top-36 sm:left-[24%] -top-16 left-[20%] h-[80vh] w-[50vw]' fill='blue' />
				<Spotlight className='md:-top-36 md:left-[35%] sm:-top-36 sm:left-[27%] -top-16 left-[25%] h-[80vh] w-[50vw]' fill='purple' />
			</div>

			<div className='flex flex-col md:flex-row text-center md:text-left justify-around items-center relative my-10 z-10 gap-10 sm:px-10'>
				<div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-centers items-center text-center gap-4'>
					<h1 className='hidden'>Tayyab Sajid - Cybersecurity Student at Rochester Institute of Technology, Dubai</h1>
					<h2 className='tracking-widest text-xl text-blue-100 max-w-sm'>Hello, I&apos;m</h2>
					<TextGenerateEffect className='text-6xl lg:text-8xl' words='Tayyab Sajid' />
					<div className='tracking-widest text-xl text-blue-100 max-w-sm'>
						<p>I am a determined and passionate</p>
						<FlipWords className='text-sm md:text-xl' duration={1500} words={["Developer", "Cybersecurity-Enthusiast", "AI/Robotics-Aficionado"]} />
					</div>
					<SocialButtons />
				</div>
				{/* <Image src={profile} width={300} height={300} alt='Picture of the author' className='rounded-full' /> */}
			</div>
		</SectionContainer>
	);
};

export default Hero;
