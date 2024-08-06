import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import PersonalInfo from "@/data/PersonalInfo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	metadataBase: new URL(PersonalInfo.websiteUrl),
	title: {
		template: "%s | Tayyab Sajid",
		default: "Tayyab Sajid | Portfolio",
	},
	description: "Explore the portfolio of Tayyab Sajid, a cybersecurity student at Rochester Institute of Technology (RIT) Dubai, and a skilled full-stack developer. Specializing in cybersecurity, web development, AI, machine learning, and robotics, Tayyab showcases a diverse range of projects and expertise. Discover innovative solutions, cutting-edge technologies, and how Tayyab is shaping the future of tech. Connect to collaborate or learn more about the exciting work happening at the intersection of technology and security.",
	generator: "Next.js",
	applicationName: "Tayyab Sajid Portfolio",
	referrer: "origin-when-cross-origin",
	keywords: ["Tayyab Sajid", "Tayyab Sajid portfolio", "cybersecurity student", "RIT Dubai student", "Rochester Institute of Technology Dubai", "cybersecurity expert", "full-stack developer", "web development", "AI and machine learning", "robotics engineer", "software solutions", "Python programming", "JavaScript developer", "machine learning projects", "cybersecurity solutions", "web application development", "AI research and development", "robotics technology", "IT consultant", "software engineer", "technology expert", "technology portfolio", "software development projects", "tech innovations", "programming skills", "software design and architecture", "data science and analytics", "IT project management", "tech freelancer", "developer portfolio"],
	authors: [{ name: "Tayyab Sajid", url: "/" }],
	creator: "Tayyab Sajid",
	publisher: "Tayyab Sajid",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		title: {
			template: "%s | Tayyab Sajid",
			default: "Tayyab Sajid | Portfolio",
		},
		description: "Explore Tayyab Sajid's portfolio showcasing expertise in cybersecurity, web development, AI, and more. See innovative projects and connect for collaboration.",
		url: "/",
		siteName: "Next.js",
		locale: "en_US",
		type: "website",
	},
	robots: {
		index: true, // Allows search engines to index the page
		follow: true, // Allows search engines to follow links on the page
		nocache: false, // Allows search engines to cache the page
		googleBot: {
			"index": true, // Allows Googlebot to index the page
			"follow": true, // Allows Googlebot to follow links on the page
			"noimageindex": false, // Allows Googlebot to index images
			"max-video-preview": -1, // No limit on video preview length
			"max-image-preview": "large", // Allows large image previews
			"max-snippet": -1, // No limit on snippet length
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body className={inter.className}>
				<ThemeProvider attribute='class' defaultTheme='dark' disableTransitionOnChange>
					{children}
				</ThemeProvider>
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
