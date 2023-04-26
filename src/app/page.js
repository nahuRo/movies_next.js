import { Inter } from "next/font/google";

import { movie, tv_show } from "../services/fetchAPI";
import { ContainerData } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
	const data = await movie.getAllData("now_playing");
	const res = await tv_show.getAllData("airing_today");

	return (
		<main>
			<div className="sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl my-0m mx-auto">
				<h1 className="text-2xl py-4">Movies</h1>
				<ContainerData data={data} />
			</div>
			{/* <div>
				<h1 className="text-2xl py-4">Series</h1>
				<ContainerData data={res} />
			</div> */}
		</main>
	);
}
