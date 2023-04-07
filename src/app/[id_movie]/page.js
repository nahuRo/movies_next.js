import MoviesDetail from "@/components/MovieDetail";
import Image from "next/image";

function secondsToString(seconds) {
	let hour = Math.floor(seconds / 3600);
	hour = hour < 10 ? "0" + hour : hour;
	let minute = Math.floor((seconds / 60) % 60);
	minute = minute < 10 ? "0" + minute : minute;
	let second = seconds % 60;
	second = second < 10 ? "0" + second : second;
	return hour + ":" + minute + ":" + second;
}

export default async function MovieDetailPage({ params }) {
	const { id_movie } = params;

	const imagePath = "https://image.tmdb.org/t/p/original";
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/${id_movie}?api_key=${process.env.API_KEY}&language=es`
	);

	const res = await data.json();

	return (
		<div>
			<div className={`bg-[url(${imagePath + res.backdrop_path})]`}>
				<div className="bg-cyan-300/20">
					<div className="flex flex-row gap-x-8 p-8">
						<Image
							src={imagePath + res.poster_path}
							width={350}
							height={450}
							alt="a"
							className="rounded"
						/>
						<div className="flex flex-col gap-y-4">
							<div>
								<div className="space-x-2 text-3xl font-medium">
									<h1 className="inline-block">{res.title}</h1>
									<span className="text-slate-400">
										({res.release_date.slice(0, 4)})
									</span>
								</div>
								<div className="space-x-2">
									<span>{res.release_date}</span>
									<span>&#x2022;</span>
									<span className="space-x-2">
										{res.genres.map((gen) => (
											<span key={gen.id}>{gen.name}</span>
										))}
									</span>
									<span>&#x2022;</span>
									<span>{res.runtime}</span>
								</div>
							</div>
							<div>
								<h3>Vista General</h3>
								<p>{res.overview}</p>
							</div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
