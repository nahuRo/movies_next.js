export default async function MoviesDetail({ params }) {
	const { id } = params;

	const imagePath = "https://image.tmdb.org/t/p/original";
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
	);

	const res = await data.json();
	return (
		<div>
			<h1 className="text-2xl">{res.title}</h1>
			<h2>{res.release_date}</h2>
			<h3>runtime: {res.runtime} minutos</h3>
		</div>
	);
}
