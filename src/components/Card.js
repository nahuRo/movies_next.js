import Image from "next/image";
import Link from "next/link";

export default function Card({ title, id, poster_path, release_date, language }) {
	const imagePath = "https://image.tmdb.org/t/p/original";
	return (
		<div className="">
			<Link href={`movies/${id}`}>
				<Image
					src={imagePath + poster_path}
					width={1000}
					height={1000}
					alt={title}
					className="rounded-lg w-[266px] h-[367px] object-cover"
				/>
			</Link>
			<div className="">
				<Link href={`movies/${id}`} className="w-[100px]">
					<h3 className="py-1">
						{title.length > 26 ? `${title.slice(0, 21)} ...` : title}
					</h3>
				</Link>
				<div className="flex flex-row justify-between">
					<div className="space-x-2">
						<span>{release_date && release_date.slice(0, 4)}</span>
						<span>&#x2022;</span>
						<span>{language}</span>
					</div>
					<div>Movie</div>
				</div>
			</div>
		</div>
	);
}
