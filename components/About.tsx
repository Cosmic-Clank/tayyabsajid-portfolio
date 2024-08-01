import React from "react";
import Image from "next/image";
import Link from "next/link";
import Heading from "./ui/Heading";
import { CardBackgroundGradient } from "./ui/CardBackgroundGradient";
import ProfileImage from "@/public/images/profile.jpg";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { CiSaveDown2 } from "react-icons/ci";
import { LinkPreview } from "./ui/LinkPreview";
import SectionContainer from "./ui/SectionContainer";

const About = () => {
	return (
		<SectionContainer id='about'>
			<Heading title='About' titleSpan='Me' />
			<div className='relative flex flex-col lg:flex-row justify-between items-center gap-24 mx-auto'>
				<div className='sm:max-w-2xl flex flex-col gap-2 justify-center items-start'>
					<h3 className='text-3xl font-bold tracking-tight sm:text-4xl'>Hi, I&apos;m Tayyab Sajid</h3>
					<p className='mt-4 text-lg'>
						I&apos;m a third-year cybersecurity student at{" "}
						<LinkPreview url='https://www.rit.edu/dubai/' className='font-bold'>
							Rochester Institute of Technology
						</LinkPreview>{" "}
						in Dubai, passionate about learning cybersecurity and computer science. But my interests don&apos;t stop there—I also love{" "}
						<LinkPreview url='https://github.com/Cosmic-Clank/emiratesroboticscompetition' className='font-bold'>
							robotics
						</LinkPreview>
						,{" "}
						<LinkPreview url='https://github.com/Cosmic-Clank/emiratesroboticscompetition' className='font-bold'>
							artificial intelligence
						</LinkPreview>
						, and{" "}
						<LinkPreview url='https://tayyabsajid.me' className='font-bold'>
							web development
						</LinkPreview>
						.
					</p>
					<p className='mt-4 text-lg'>
						I enjoy problem-solving and critical thinking, and I aim to be skilled in various STEM subjects. I&apos;ve won several{" "}
						<LinkPreview url='https://tayyabsajid.me' className='font-bold'>
							competitions
						</LinkPreview>{" "}
						in computer science, robotics, and AI, but I keep trying to be better. Besides academics, I love picking up new skills like solving{" "}
						<LinkPreview url='https://en.wikipedia.org/wiki/Rubik%27s_Cube' className='font-bold'>
							Rubik&apos;s cubes
						</LinkPreview>{" "}
						and{" "}
						<LinkPreview url='https://en.wikipedia.org/wiki/Pen_spinning' className='font-bold'>
							pen spinning
						</LinkPreview>{" "}
						.
					</p>
					<div className='flex flex-row gap-6'>
						<Link href={"#contact"} className='mt-4'>
							<HoverBorderGradient containerClassName='rounded-full' as='button' className='dark:bg-black-100 bg-white text-black dark:text-white flex items-center space-x-2'>
								Contact Me!
								<span>
									<BsBoxArrowUpRight className='ml-3' size={"18"} />
								</span>
							</HoverBorderGradient>
						</Link>
						<Link href={"/docs/Tayyab Sajid CV.pdf"} className='mt-4'>
							<HoverBorderGradient containerClassName='rounded-full' as='button' className='dark:bg-black-100 bg-white text-black dark:text-white flex items-center space-x-2'>
								View CV
								<span>
									<CiSaveDown2 className='ml-3' size={"24"} />
								</span>
							</HoverBorderGradient>
						</Link>
					</div>
				</div>
				<div>
					<CardBackgroundGradient className='rounded-[22px] max-w-sm bg-white dark:bg-zinc-900 overflow-hidden'>
						<Image src={ProfileImage} alt='jordans' height='400' width='400' className='object-contain' />
					</CardBackgroundGradient>
				</div>
			</div>
		</SectionContainer>
	);
};

export default About;
