import React from "react";
import Heading from "./ui/Heading";
import SectionContainer from "./ui/SectionContainer";
import Image from "next/image";
import Link from "next/link";
import { PinContainer } from "./ui/3dPin";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Works = () => {
	return (
		<SectionContainer id='works'>
			<Heading title='Some of' titleSpan='my work' />
			<div className='flex flex-row justify-center items-center gap-x-6 gap-y-28 flex-wrap max-w-7xl'>
				{items.map(({ title, description, image, icons, link }, index) => (
					<PinContainer key={index} title={link} href={link}>
						<div className='flex basis-full flex-col tracking-tight sm:basis-1/2 w-[20rem] h-[20rem] gap-4'>
							<div className='flex flex-1 w-full rounded-lg mb-4 relative'>
								<Image src={image} alt='Image of my work' width={"1000"} height={"1000"} className='absolute object-cover object-left-top w-full h-full rounded-lg' />
							</div>
							<div className='text-base font-normal text-slate-200 mb-4'>
								<h3 className='max-w-xs !pb-1 !m-0 font-bold text-2xl'>{title}</h3>
								<span className=''>{description}</span>
							</div>
							<div className='flex flex-row justify-between items-center'>
								<div className='flex flex-row'>
									{icons.map((icon, index) => (
										<div key={index} className='w-8 h-8 border border-zinc-500 bg-black-100 rounded-full p-2 flex justify-center items-center' style={{ transform: `translateX(-${5 * index * 2}px)` }}>
											<Image src={icon} width={"1000"} height={"1000"} alt='company logo' />
										</div>
									))}
								</div>
								<div>
									<BsBoxArrowUpRight />
								</div>
							</div>
						</div>
					</PinContainer>
				))}
			</div>
		</SectionContainer>
	);
};

const items = [
	{
		title: "Nexgen Academy",
		description: "Created a sleek, user-friendly website for Nexgen Academy, showcasing AI solutions and educational offerings.",
		image: "/images/works/nexgen-academy.png",
		icons: ["/images/logos/html.svg", "/images/logos/css.svg", "/images/logos/javascript.svg", "/images/logos/gsap.svg"],
		link: "https://nexgenacademy.ae/",
	},
	{
		title: "Al Madena Landscape",
		description: "Developed a visually appealing website for Al Madena Landscape, highlighting their services and portfolio.",
		image: "/images/works/landscaping-website.png",
		icons: ["/images/logos/html.svg", "/images/logos/css.svg", "/images/logos/javascript.svg", "/images/logos/gsap.svg"],
		link: "https://cosmic-clank.github.io/almadenalandscape/",
	},
	{
		title: "Al Madena Technical Service",
		description: "Designed a functional website for Al Madena Technical Service to showcase their diverse technical offerings. ",
		image: "/images/works/technicalservices-website.png",
		icons: ["/images/logos/html.svg", "/images/logos/css.svg", "/images/logos/javascript.svg", "/images/logos/gsap.svg"],
		link: "https://cosmic-clank.github.io/almadenatechnicalservices/",
	},
	{
		title: "Eradicate App",
		description: "Built a phamaceutical app called Eradicate to help patients with medication reminders and health information for h-pylori.",
		image: "/images/works/eradicate.png",
		icons: ["/images/logos/node-js.svg", "/images/logos/react-native.svg", "/images/logos/javascript.svg"],
		link: "https://github.com/Tayyab-RIT/Eradicate",
	},
	{
		title: "DSO - Soccer Game",
		description: "Developed an AI solution for a soccer game that uses cameras to detect player and ball positions for scoring.",
		image: "/images/works/dso-soccer.png",
		icons: ["/images/logos/python.svg", "/images/logos/tensorflow.svg", "/images/logos/pytorch.svg", "/images/logos/yolo.svg", "/images/logos/opencv.svg", "/images/logos/numpy.svg"],
		link: "https://github.com/Cosmic-Clank/dsosoccer",
	},
	{
		title: "Auto Sorting Manipulator",
		description: "Created a robotic system that sorts trash using a robotic arm and depth camera for efficient recycling.",
		image: "/images/works/emiratesroboticscompetition.png",
		icons: ["/images/logos/python.svg", "/images/logos/ros.svg", "/images/logos/openai.svg"],
		link: "https://github.com/Cosmic-Clank/emiratesroboticscompetition",
	},
];

export default Works;
