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
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto'>
			<GridAndDotBackground />
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
