import Links from "@/components/Links";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

const poppins = Poppins({
	weight: ["100", "400", "500", "600", "900"],
	subsets: ["latin"],
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>Primer proyecto</title>
			</head>
			<body className={`${poppins.className} `}>
				<header>
					<Links />
				</header>
				<main>{children}</main>
			</body>
		</html>
	);
}
