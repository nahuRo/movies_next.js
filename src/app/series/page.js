import { tv_show } from "../../services/fetchAPI";
import { ContainerData } from "../../components";

export default async function SeriesPage({ params }) {
	const res = await tv_show.getAllData("airing_today");

	return (
		<>
			<div>
				<h1 className="text-2xl py-4">Series</h1>
				<ContainerData data={res} />
			</div>
		</>
	);
}
