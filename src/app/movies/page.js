import ContainerData from "@/components/ContainerData";

export default async function MoviesPage() {
	const data = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=es`
	);
	const res = await data.json();

	return (
		<div>
			<h1 className="text-2xl py-4">Movies</h1>
			<ContainerData data={res} />
		</div>
	);
}
