import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Tayyab Sajid - Portfolio",
	description: "Welcome to the portfolio of Tayyab Sajid, a versatile developer specializing in cybersecurity, web development, AI, machine learning, and robotics. Explore my projects and get in touch to collaborate.",
	keywords: "Tayyab Sajid, portfolio, cybersecurity, web development, AI, machine learning, robotics, full-stack development, software solutions, Python, JavaScript",
	author: "Tayyab Sajid",
	canonical: "https://tayyabsajid.me",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://tayyabsajid.me",
		site_name: "Tayyab Sajid - Portfolio",
		title: "Tayyab Sajid - Portfolio",
		description: "Welcome to the portfolio of Tayyab Sajid, a versatile developer specializing in cybersecurity, web development, AI, machine learning, and robotics. Explore my projects and get in touch to collaborate.",
		images: [
			{
				url: "https://tayyabsajid.me/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Tayyab Sajid - Portfolio",
			},
		],
	},
	icons: {
		icon: "/favicon.ico",
		appleTouchIcon: "/apple-touch-icon.png",
		favicon32: "/favicon-32x32.png",
		favicon16: "/favicon-16x16.png",
		manifest: "/site.webmanifest",
		maskIcon: "/safari-pinned-tab.svg",
	},
	manifest: "/site.webmanifest",
	robots: "index, follow",
	metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='scroll-smooth'>
			<body className={inter.className}>
				<ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
				<SpeedInsights />
			</body>
		</html>
	);
}
