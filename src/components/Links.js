import Link from "next/link";

const my_routes = [
	{ label: "Home", url: "/" },
	{ label: "Movies", url: "/movies" },
	{ label: "Series", url: "/series" },
];
export default function Links() {
	return (
		<nav className="bg-[#041C32] space-x-4 p-4 font-medium sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl my-0m mx-auto">
			{my_routes.map((link) => (
				<Link className="hover:underline" key={link.url} href={link.url}>
					{link.label}
				</Link>
			))}
		</nav>
	);
}
