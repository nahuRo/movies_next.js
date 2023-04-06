import Link from "next/link";

const my_routes = [
	{ label: "Home", url: "/" },
	{ label: "About", url: "/about" },
	{ label: "Contact", url: "/contact" },
];
export default function Links() {
	return (
		<nav className="bg-red-400 space-x-4 p-4 font-medium">
			{my_routes.map((link) => (
				<Link className="hover:underline" key={link.url} href={link.url}>
					{link.label}
				</Link>
			))}
		</nav>
	);
}
