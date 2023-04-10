import Image from "next/image";

export default function CardCollection({ movie }) {
	const imagePath = "https://image.tmdb.org/t/p/original";
	const { id, title, overview, poster_path, release_date } = movie;

	return (
		<div className="flex flex-row bg-slate-600 h-[180px] rounded-md overflow-hidden">
			<Image
				src={imagePath + poster_path}
				width={600}
				height={600}
				alt={title}
				className="w-[150px] h-[180px] object-cover"
			/>
			<div className="p-4 space-y-4 w-full">
				<div>
					<h3 className="text-xl font-[600]">{title}</h3>
					<span className="text-slate-800 font-[500]">{release_date}</span>
				</div>
				<p className="text-sm">{overview.slice(0, 800)}</p>
			</div>
		</div>
	);
}
