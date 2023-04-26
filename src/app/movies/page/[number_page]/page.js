import Link from "next/link";
import { ContainerData } from "../../../../components";
import { movie } from "../../../../services/fetchAPI";

export default async function Page({ params }) {
	const { number_page } = params;
	const data = await movie.getAllData("now_playing", number_page);

	const pages = [];
	for (let i = 0; i < data.total_pages; i++) {
		pages.push(i + 1);
	}

	return (
		<>
			<div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl my-0m mx-auto">
				<h1 className="text-2xl py-4">Movies</h1>
				<ContainerData data={data} />
			</div>
			<div className="flex flex-row gap-x-4 w-1/2 overflow-x-scroll ">
				{pages.map((nav) => (
					<Link
						key={nav}
						href={`movies/page/${nav}`}
						className="p-2 bg-black text-white"
					>
						{nav}
					</Link>
				))}
			</div>
		</>
	);
}
