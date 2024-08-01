import React from "react";
import Heading from "./ui/Heading";
import SectionContainer from "./ui/SectionContainer";
import Image from "next/image";
import { FollowerPointerCard } from "./ui/FollowPointer";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { IoPieChartOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbBrandPython } from "react-icons/tb";
import { BsRobot } from "react-icons/bs";
import { GiRobotGrab } from "react-icons/gi";

const Services = () => {
	return (
		<SectionContainer id='services'>
			<Heading title='What I' titleSpan='Offer' />
			<div className='mx-auto flex flex-row flex-wrap gap-8 justify-center'>
				{services.map((service, index) => (
					<FollowerPointerCard className='md:max-w-96' key={index} title={<TitleComponent title={service.title} avatar={service.logo} />}>
						<div className='relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-black-100 hover:shadow-xl border border-gray-600'>
							<div className=' p-4'>
								<h2 className='flex gap-3 items-center font-bold my-4 text-lg text-white'>
									{service.title}
									<span>{service.logo}</span>
								</h2>
								<h2 className='font-normal my-4 text-sm text-zinc-400'>{service.description}</h2>
								<div className='flex flex-col items-start mt-10'>
									<span className='flex flex-row flex-wrap'>
										{service.icons.map((icon, index) => (
											<div key={index} className='w-7 h-7 border border-zinc-500 bg-black-100 rounded-full p-1 flex justify-center items-center' style={{ transform: `translateX(-${5 * index * 2}px)` }}>
												<Image src={icon} width={"1000"} height={"1000"} alt='company logo' />
											</div>
										))}
									</span>
									<Link href={"#contact"} className='mt-4'>
										<HoverBorderGradient containerClassName='rounded-full' as='button' className='dark:bg-black-100 bg-white text-black dark:text-white flex items-center space-x-2 cursor-none'>
											Send Inquiry
											<span>
												<BsBoxArrowUpRight className='ml-3' size={"18"} />
											</span>
										</HoverBorderGradient>
									</Link>
								</div>
							</div>
						</div>
					</FollowerPointerCard>
				))}
			</div>
		</SectionContainer>
	);
};

const services = [
	{
		title: "Frontend Development",
		description: "Creating responsive and visually appealing interfaces using React, Next.js, Tailwind CSS, and other modern frontend technologies.",
		image: "/images/services/frontend.jpg",
		icons: ["/images/logos/node-js.svg", "/images/logos/react-js.svg", "/images/logos/next-js.svg", "/images/logos/typescript.svg", "/images/logos/javascript.svg", "/images/logos/tailwindcss.svg", "/images/logos/vercel.svg", "/images/logos/html.svg", "/images/logos/css.svg"],
		logo: <MdOutlineDesignServices size={25} />,
	},
	{
		title: "Backend Development",
		description: "Building robust backends with Express or Python, and various databases like MongoDB and Postgress to ensure smooth data handling and storage.",
		image: "/images/services/backend.jpg",
		icons: ["/images/logos/node-js.svg", "/images/logos/express-js.svg", "/images/logos/next-js.svg", "/images/logos/typescript.svg", "/images/logos/javascript.svg", "/images/logos/mongodb.svg", "/images/logos/postgresql.svg", "/images/logos/django.svg"],
		logo: <IoPieChartOutline size={25} />,
	},
	{
		title: "Fullstack Development",
		description: "Offering complete web solutions by integrating both frontend and backend technologies, ensuring seamless and scalable web applications.",
		image: "/images/services/fullstack.jpg",
		icons: ["/images/logos/react-js.svg", "/images/logos/next-js.svg", "/images/logos/typescript.svg", "/images/logos/javascript.svg", "/images/logos/tailwindcss.svg", "/images/logos/express-js.svg", "/images/logos/mongodb.svg", "/images/logos/postgresql.svg", "/images/logos/django.svg"],
		logo: <CiGlobe size={25} />,
	},
	{
		title: "Python Software Solutions",
		description: "Providing custom Python software solutions for automation, data analysis, and application development to meet diverse business needs.",
		image: "/images/services/python.jpg",
		icons: ["/images/logos/python.svg", "/images/logos/pygame.svg", "/images/logos/django.svg"],
		logo: <TbBrandPython size={25} />,
	},
	{
		title: "AI and Machine Learning",
		description: "Developing AI and ML models to solve complex problems, including data preprocessing, model training, and deployment using popular frameworks.",
		image: "/images/services/ai-ml.jpg",
		icons: ["/images/logos/python.svg", "/images/logos/tensorflow.svg", "/images/logos/pytorch.svg", "/images/logos/yolo.svg", "/images/logos/scikit-learn.svg", "/images/logos/openai.svg", "/images/logos/claudeai.svg"],
		logo: <BsRobot size={25} />,
	},
	{
		title: "Robotics Solutions",
		description: "Designing and programming robotic systems for various applications, including automation, manufacturing, and research.",
		image: "/images/services/robotics.jpg",
		icons: ["/images/logos/python.svg", "/images/logos/ros.svg", "/images/logos/arduino.svg", "/images/logos/yolo.svg", "/images/logos/openai.svg", "/images/logos/claudeai.svg"],
		logo: <GiRobotGrab size={25} />,
	},
];

const TitleComponent = ({ title, avatar }: { title: string; avatar: React.ReactNode }) => (
	<div className='flex space-x-2 items-center'>
		{avatar}
		{/* <Image src={avatar} height='20' width='20' alt='thumbnail' className='rounded-full border-2 border-white' /> */}
		<p>{title}</p>
	</div>
);

export default Services;
