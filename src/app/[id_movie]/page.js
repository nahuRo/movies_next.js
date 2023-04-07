import CardCast from "@/components/CardCast";
import MoviesDetail from "@/components/MovieDetail";
import Image from "next/image";
import Link from "next/link";

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

	const credits = await fetch(
		`https://api.themoviedb.org/3/movie/${id_movie}/credits?api_key=${process.env.API_KEY}&language=es`
	);

	const images = await fetch(
		`https://api.themoviedb.org/3/movie/${id_movie}/images?api_key=${process.env.API_KEY}&language=es`
	);

	const recommendations = await fetch(
		`https://api.themoviedb.org/3/movie/${id_movie}/recommendations?api_key=${process.env.API_KEY}&language=es`
	);

	const lists = await fetch(
		`https://api.themoviedb.org/3/movie/${id_movie}/lists?api_key=${process.env.API_KEY}&language=es`
	);

	const res_movie = await data.json();
	const res_cred = await credits.json();
	const res_images = await images.json();
	const res_recom = await recommendations.json();
	// const collection = await lists.json();

	const {
		backdrop_path,
		poster_path,
		title,
		release_date,
		genres,
		runtime,
		overview,
		original_title,
		status,
		budget,
		revenue,
		tagline,
		belongs_to_collection,
	} = res_movie;
	const { cast, crew } = res_cred;

	console.log(belongs_to_collection);

	return (
		<div>
			<section className={`bg-[url(${imagePath + backdrop_path})]`}>
				<div className="bg-cyan-300/20">
					<div className="flex flex-row gap-x-8 p-8">
						<Image
							src={imagePath + poster_path}
							width={300}
							height={450}
							alt="a"
							className="rounded-md"
						/>
						<div className="flex flex-col gap-y-4">
							<div>
								<div className="space-x-2 text-3xl font-medium">
									<h1 className="inline-block">{title}</h1>
									<span className="text-slate-400">
										({release_date.slice(0, 4)})
									</span>
								</div>
								<div className="space-x-2">
									<span>{release_date}</span>
									<span>&#x2022;</span>
									<span className="space-x-2">
										{genres.map((gen) => (
											<span key={gen.id}>{gen.name}</span>
										))}
									</span>
									<span>&#x2022;</span>
									<span>{runtime}</span>
								</div>
							</div>
							<div>
								<i>{tagline}</i>
								<h3 className="text-lg py-2">Vista General</h3>
								<p className="text-base">{overview}</p>
							</div>
							<div></div>
						</div>
					</div>
				</div>
			</section>
			<div className="flex flex-row my-8 gap-x-8">
				<div className="w-4/5">
					<section className="flex flex-row gap-4 overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-thumb-[#fff] scrollbar-thumb-rounded pb-4">
						{cast.map((actor) => (
							<CardCast actor={actor} key={actor.id} />
						))}
					</section>
					<section>
						<h2 className="text-white">Media</h2>
					</section>
					<section>
						<h2 className="text-white">Recomendaciones</h2>
						<section className="flex flex-row gap-4 overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-thumb-[#fff] scrollbar-thumb-rounded pb-4">
							{res_recom.results.map((res) => (
								<div
									key={res.id}
									className="shadow-2xl w-[200px] h-[380px] rounded-lg"
								>
									<Link
										key={res.id}
										href={`/${res.id}`}
										className="w-[200px] h-[330px] block"
									>
										<Image
											src={imagePath + res.poster_path}
											alt={res.name}
											width={200}
											height={200}
											className="w-full h-full object-cover rounded-t-lg"
										/>
										<span className="text-sm">{res.title}</span>
									</Link>
								</div>
							))}
						</section>
					</section>
				</div>
				<div className="w-1/5 bg-violet-800 text-white flex flex-col justify-start gap-y-4">
					<p>
						<strong className="font-[600]">Título original</strong>
						<span className="block font-[400]">{original_title}</span>
					</p>
					<p>
						<strong className="font-[600]">Estado</strong>
						<span className="block font-[400]">{status}</span>
					</p>
					<p>
						<strong className="font-[600]">Presupuesto</strong>
						<span className="block font-[400]">{budget}</span>
					</p>
					<p>
						<strong className="font-[600]">Ingresos</strong>
						<span className="block font-[400]">{revenue}</span>
					</p>
				</div>
			</div>
		</div>
	);
}
