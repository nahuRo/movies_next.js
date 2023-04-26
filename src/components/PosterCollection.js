import Image from "next/image";
import Link from "next/link";

export default async function PosterCollection({ data, id_movie }) {
	const imagePath = "https://image.tmdb.org/t/p/original";

	const { id, name, backdrop_path } = data;

	return (
		<div className="relative bg-slate-700 h-96 rounded-xl overflow-hidden">
			<Image
				src={imagePath + backdrop_path}
				width={1000}
				height={600}
				alt={name}
				className="absolute top-0 left-0 w-full h-full object-cover"
			/>
			<div className="relative z-10 h-full w-full flex flex-col justify-center items-start gap-y-2 bg-gradient-to-r from-transparent via-0%  via-[#184f60] px-8">
				<h2 className="text-2xl font-[500]">{name}</h2>
				<Link
					href={`movies/collection/${id}`}
					className="p-2 bg-[#04293a] text-white rounded"
				>
					Ver coleccion
				</Link>
			</div>
		</div>
	);
}
