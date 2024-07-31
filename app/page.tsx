"use client";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { BackgroundGradientAnimation } from "@/components/ui/BackgroundGradientAnimation";
import GridAndDotBackground from "@/components/ui/GridAndDotBackground";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Toolbox from "@/components/Toolbox";
import Contact from "@/components/Contact";
import Lenis from "lenis";
import { useEffect } from "react";
import Footer from "@/components/Footer";

export default function Home() {
	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);
	}, []);
	return (
		<main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto'>
			<GridAndDotBackground />
			<BackgroundGradientAnimation containerClassName='opacity-10 absolute h-full w-full' />

			<Navbar />
			<Hero />
			<About />
			<Works />
			{/* Use the card hover effect for services */}
			<Services />
			{/* <Gallery /> */}
			<Toolbox />
			<Contact />
			{/* Use github globe somewhere */}
			<Footer />
		</main>
	);
}
