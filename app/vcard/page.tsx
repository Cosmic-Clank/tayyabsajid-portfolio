import ContactForm from "@/components/ui/ContactForm";
import SocialButtons from "@/components/ui/SocialButtons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShareNodes, FaQrcode } from "react-icons/fa6";
import Button from "./Button";
import { QRCodeSVG } from "qrcode.react";
import { generateVCard } from "@/lib/vCard";

export const metadata = {
	title: "vCard",
};

const page = () => {
	return (
		<main className='flex flex-col justify-center items-center'>
			<div className='w-full flex flex-col justify-center items-center max-w-xl bg-black-100 p-12 gap-12'>
				<nav className='w-full'>
					<div className='flex w-full justify-between items-center'>
						<Link href={"/"} className='rounded-full w-14 h-14 overflow-hidden relative'>
							<Image src='/images/profile.jpg' alt='Profile Picture' width={200} height={200} />
						</Link>
						<div className='flex gap-6'>
							<Link href={"#qrcode"}>
								<FaShareNodes size={25} />
							</Link>
							<Link href='#qrcode'>
								<FaQrcode size={25} />
							</Link>
						</div>
					</div>
					<hr className='mt-12 mx-auto w-3/4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10' />
				</nav>

				<div className='flex flex-col justify-center items-center text-center'>
					<h1 className='text-4xl font-bold mb-4'>
						Tayyab <span className='text-textAccent'>Sajid</span>
					</h1>
					<p className='text-sm text-gray-200'>Cybersecurity student at</p>
					<Link className='font-bold text-sm text-gray-200' href={"https://www.rit.edu/dubai/"}>
						RIT Dubai
					</Link>
					<p className='text-sm mt-12'>A cybersecurity student at Rochester Institute of Technology (RIT) Dubai, and a skilled full-stack developer. Specializing in cybersecurity, web development, AI, machine learning, and robotics</p>
				</div>
				<Button />

				<SocialButtons />
				<ContactForm />
				<QRCodeSVG id='qrcode' value='https://www.linkedin.com/in/tayyabsajid/' includeMargin size={480} className='w-full' imageSettings={{ src: "/images/logos/linkedin.svg", height: 48, width: 48, excavate: true }} />
				<QRCodeSVG value='https://www.instagram.com/cosmic_clank/' includeMargin size={480} className='w-full' imageSettings={{ src: "/images/logos/instagram.svg", height: 48, width: 48, excavate: true }} />
				<QRCodeSVG value='https://wa.me/+971561831758' includeMargin size={480} className='w-full' imageSettings={{ src: "/images/logos/whatsapp.svg", height: 48, width: 48, excavate: true }} />
				<QRCodeSVG value='https://github.com/Cosmic-Clank' includeMargin size={480} className='w-full' imageSettings={{ src: "/images/logos/github.svg", height: 48, width: 48, excavate: true }} />
				<QRCodeSVG value='mailto:tayyabsajidq41321@gmail.com' includeMargin size={480} className='w-full' imageSettings={{ src: "/images/logos/gmail.svg", height: 48, width: 48, excavate: true }} />
				<QRCodeSVG value={generateVCard()} includeMargin size={480} className='w-full' imageSettings={{ src: "/favicon.ico", height: 48, width: 48, excavate: true }} />
			</div>
		</main>
	);
};

export default page;
