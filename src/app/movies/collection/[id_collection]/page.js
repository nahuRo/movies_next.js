import Image from "next/image";
import { CardCollection } from "../../../../components";
import { getMovieCollection, movie, collection } from "../../../../services/fetchAPI";

export default async function MovieCollectionPage({ params }) {
	const { id_collection } = params;

	const imagePath = "https://image.tmdb.org/t/p/original";

	const res_collection_data = await collection.getData(id_collection);
	const { id, name, overview, poster_path, backdrop_path, parts } = res_collection_data;

	return (
		<>
			<section className="relative p-8 bg-cyan-300/20 ">
				<div className="absolute z-10 top-0 right-0 w-full h-full bg-gradient-to-r from-0% from-[#184f60] via-35% via-[#184f60]"></div>
				<Image
					src={imagePath + backdrop_path}
					width={3000}
					height={1000}
					alt={name}
					className="absolute top-0 right-0 w-full h-full object-cover transform translate-x-1/3 "
				/>
				<div className="relative z-20 flex flex-row gap-x-8 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl my-0m mx-auto">
					<Image
						src={imagePath + poster_path}
						width={300}
						height={450}
						alt={name}
						className="rounded-md"
					/>
					<div className="flex flex-col gap-y-4">
						<div>
							<div className="space-x-2 text-3xl font-medium">
								<h1 className="inline-block">{name}</h1>
								{/* <span className="text-slate-400">
									({release_date.slice(0, 4)})
								</span> */}
							</div>
						</div>
						<div>
							<h3 className="text-lg py-2">Vista General</h3>
							<p className="text-base">{overview}</p>
						</div>
						<div></div>
					</div>
				</div>
			</section>
			<section className="flex flex-col gap-y-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl my-0m mx-auto my-4">
				<h2 className="text-white text-2xl pb-4">{parts.length} películas</h2>
				{parts.map((movie) => (
					<CardCollection key={movie.id} movie={movie} />
				))}
			</section>
		</>
	);
}
