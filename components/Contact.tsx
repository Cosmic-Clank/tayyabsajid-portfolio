"use client";
import React from "react";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";
import { cn } from "@/lib/utils";
import SectionContainer from "./ui/SectionContainer";
import Heading from "./ui/Heading";
import { Textarea } from "./ui/Textarea";
import { MdOutlinePerson4 } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import SocialsButton from "./ui/SocialsButton";
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";

export default function SignupFormDemo() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("Form submitted");
	};
	return (
		<SectionContainer id='contact'>
			<Heading title='Connect With' titleSpan='Me!' />
			<div className='flex flex-col lg:flex-row gap-12'>
				<div className='flex flex-col gap-6 text-lg'>
					<div className='flex flex-col gap-4'>
						<p>I&apos;d love to hear from you! Whether you&apos;re looking to collaborate on a project, need a web development solution, or just want to have a chat!</p>
						<hr className='my-4 border-gray-500 opacity-60 w-1/2' />
						<p>Drop me an email anytime, and I&apos;ll get back to you as soon as possible.</p>
						<span className='flex flex-row gap-4 items-center underline bold'>
							<SocialsButton href='mailto:tayyabsajidq41321@gmail.com' className='pointer-events-auto hover:-translate-y-1 transition-transform' label='' icon={<IoMailOpenOutline className='text-red-600' />} position='left' />
							tayyabsajidq41321@gmail.com
						</span>
						<hr className='my-4 border-gray-500 opacity-60 w-1/2' />
						<p>Prefer to talk? Give me a call or send a text.</p>
						<span className='flex flex-row gap-4 items-center underline bold'>
							<SocialsButton href='https://wa.me/+971561831758' className='pointer-events-auto hover:-translate-y-1 transition-transform' label='' icon={<FaWhatsapp className='text-[#25D366]' />} position='left' />
							+971 56 183 1758
						</span>
						<hr className='my-4 border-gray-500 opacity-60 w-1/2' />
						<p>Or connect with me on other platforms:</p>
					</div>
					<div className='flex flex-row gap-4'>
						<SocialsButton href='https://www.linkedin.com/in/tayyabsajid/' className='pointer-events-auto hover:-translate-y-1 transition-transform' label='' icon={<FaLinkedinIn className='text-[#0b66c2]' />} position='left' />
						<SocialsButton href='https://www.instagram.com/cosmic_clank/' className='pointer-events-auto hover:-translate-y-1 transition-transform' label='' icon={<FaInstagram className='text-[#C13584]' />} position='left' />
						<SocialsButton href='https://wa.me/+971561831758' className='pointer-events-auto hover:-translate-y-1 transition-transform' label='' icon={<FaWhatsapp className='text-[#25D366]' />} position='left' />
						<SocialsButton href='https://github.com/Cosmic-Clank' className='pointer-events-auto hover:-translate-y-1 transition-transform' label='' icon={<FaGithub className='text-white' />} position='left' />
						<SocialsButton href='mailto:tayyabsajidq41321@gmail.com' className='pointer-events-auto hover:-translate-y-1 transition-transform' label='' icon={<IoMailOpenOutline className='text-red-600' />} position='left' />
					</div>
				</div>
				<div className='max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black-100'>
					<h2 className='font-bold text-xl text-neutral-800 dark:text-neutral-200'>Quick Message</h2>
					<p className='text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300'>You can also just send me a quick message and I&apos;ll get back to you on you mail.</p>

					<form className='my-8' onSubmit={handleSubmit}>
						<div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4'>
							<LabelInputContainer>
								<Label htmlFor='firstname'>
									<span className='flex gap-2 items-center'>
										<MdOutlinePerson4 size={20} />
										Name
									</span>
								</Label>
								<Input id='firstname' placeholder='Wade Wilson' type='text' />
							</LabelInputContainer>
						</div>
						<LabelInputContainer className='mb-4'>
							<Label htmlFor='email'>
								<span className='flex gap-2 items-center'>
									<MdOutlineAlternateEmail size={20} />
									Email
								</span>
							</Label>
							<Input id='email' placeholder='friendlyperson@bestmail.com' type='email' />
						</LabelInputContainer>

						<LabelInputContainer className='mb-8'>
							<Label htmlFor='message'>
								<span className='flex gap-2 items-center'>
									<MdMessage size={20} />
									Message
								</span>
							</Label>
							<Textarea id='message' placeholder='Hello, I would like to just sit and have a talk with you :)' />
						</LabelInputContainer>

						<button className='bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]' type='submit'>
							Send &rarr;
							<BottomGradient />
						</button>

						<div className='bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full' />
					</form>
				</div>
			</div>
		</SectionContainer>
	);
}

const BottomGradient = () => {
	return (
		<>
			<span className='group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent' />
			<span className='group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent' />
		</>
	);
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	return <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>;
};
