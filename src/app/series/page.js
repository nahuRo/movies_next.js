import ContainerData from "@/components/ContainerData";

export default async function SeriesPage() {
	const data = await fetch(
		`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`
	);
	const res = await data.json();

	return (
		<div>
			<h1 className="text-2xl py-4">Series</h1>
			<ContainerData data={res} />
		</div>
	);
}
