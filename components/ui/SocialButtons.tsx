import React from "react";
import SocialsButton from "./SocialsButton";
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import PersonalInfo from "@/data/PersonalInfo";

const SocialButtons = () => {
	return (
		<div className='flex gap-2'>
			<SocialsButton href={PersonalInfo.socialProfiles.linkedin} className='pointer-events-auto hover:-translate-y-1 transition-transform' label='' icon={<FaLinkedinIn className='text-[#0b66c2]' />} position='left' />
			<SocialsButton href={PersonalInfo.socialProfiles.instagram} className='pointer-events-auto hover:-translate-y-1 transition-transform' label='' icon={<FaInstagram className='text-[#C13584]' />} position='left' />
			<SocialsButton href={PersonalInfo.socialProfiles.whatsapp} className='pointer-events-auto hover:-translate-y-1 transition-transform' label='' icon={<FaWhatsapp className='text-[#25D366]' />} position='left' />
			<SocialsButton href={PersonalInfo.socialProfiles.github} className='pointer-events-auto hover:-translate-y-1 transition-transform' label='' icon={<FaGithub className='text-white' />} position='left' />
			<SocialsButton href={PersonalInfo.socialProfiles.email} className='pointer-events-auto hover:-translate-y-1 transition-transform' label='' icon={<IoMailOpenOutline className='text-red-600' />} position='left' />
		</div>
	);
};

export default SocialButtons;
