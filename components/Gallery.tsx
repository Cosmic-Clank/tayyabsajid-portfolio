import React from "react";
import Heading from "./ui/Heading";
import SectionContainer from "./ui/SectionContainer";
import { ParallaxScroll } from "./ui/ParallaxScroll";

const Gallery = () => {
	return (
		<SectionContainer id='gallery'>
			<Heading title='Gallery' />
			<ParallaxScroll images={images} />
		</SectionContainer>
	);
};

const images = ["/images/profile.jpg", "/images/profile.jpg", "/images/profile.jpg", "/images/profile.jpg", "/images/profile.jpg", "/images/profile.jpg", "/images/profile.jpg", "/images/profile.jpg", "/images/profile.jpg", "/images/profile.jpg", "/images/profile.jpg", "/images/profile.jpg", "/images/profile.jpg", "/images/profile.jpg", "/images/profile.jpg", "/images/profile.jpg", "/images/profile.jpg", "/images/profile.jpg", "/images/profile.jpg", "/images/profile.jpg"];

export default Gallery;
