import Card from "./Card";

export default function ContainerData({ data }) {
	return (
		<div>
			<div className="grid gap-4 grid-cols-fluid sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl my-0m mx-auto">
				{data.results.map((movie) => (
					<Card
						key={movie.id}
						id={movie.id}
						title={movie.title || movie.name} // en movie le pego al title y en serie le pego a name
						language={movie.original_language}
						release_date={movie.first_air_date || movie.release_date}
						poster_path={movie.poster_path}
					/>
				))}
			</div>
		</div>
	);
}
