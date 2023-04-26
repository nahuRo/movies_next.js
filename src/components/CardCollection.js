import Image from "next/image";
import Link from "next/link";

export default function CardCollection({ movie }) {
	const imagePath = "https://image.tmdb.org/t/p/original";
	const { id, title, overview, poster_path, release_date } = movie;

	return (
		<div className="flex flex-row bg-slate-600 h-[180px] rounded-md overflow-hidden">
			<Link href={`movies/${id}`}>
				<Image
					src={imagePath + poster_path}
					width={600}
					height={600}
					alt={title}
					className="w-[150px] h-[180px] object-cover"
				/>
			</Link>

			<div className="p-4 space-y-4 w-full">
				<div>
					<Link href={`movies/${id}`}>
						<h3 className="text-xl font-[600]">{title}</h3>
					</Link>
					<span className="text-slate-800 font-[500]">{release_date}</span>
				</div>
				<p className="text-sm">{overview.slice(0, 600)}</p>
			</div>
		</div>
	);
}
