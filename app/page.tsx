import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<main className='relative bg-black-100 justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
			<div>
				<Navbar />
				<Hero />
			</div>
		</main>
	);
}
