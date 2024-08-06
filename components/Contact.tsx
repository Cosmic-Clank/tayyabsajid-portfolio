import React from "react";

import SectionContainer from "./ui/SectionContainer";
import Heading from "./ui/Heading";

import SocialsButton from "./ui/SocialsButton";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import PersonalInfo from "@/data/PersonalInfo";
import SocialButtons from "./ui/SocialButtons";
import ContactForm from "./ui/ContactForm";

export default function SignupFormDemo() {
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
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
							<SocialsButton href={PersonalInfo.socialProfiles.email} className='pointer-events-auto hover:-translate-y-1 transition-transform' label='' icon={<IoMailOpenOutline className='text-red-600' />} position='left' />
							{PersonalInfo.email}
						</span>
						<hr className='my-4 border-gray-500 opacity-60 w-1/2' />
						<p>Prefer to talk? Give me a call or send a text.</p>
						<span className='flex flex-row gap-4 items-center underline bold'>
							<SocialsButton href={PersonalInfo.socialProfiles.whatsapp} className='pointer-events-auto hover:-translate-y-1 transition-transform' label='' icon={<FaWhatsapp className='text-[#25D366]' />} position='left' />
							{PersonalInfo.phone}
						</span>
						<hr className='my-4 border-gray-500 opacity-60 w-1/2' />
						<p>Or connect with me on other platforms:</p>
					</div>
					<SocialButtons />
				</div>
				<ContactForm />
			</div>
		</SectionContainer>
	);
}
