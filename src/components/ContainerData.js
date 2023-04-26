import Card from "./Card";

export default function ContainerData({ data }) {
	return (
		<div className="grid gap-4 grid-cols-fluid">
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
	);
}
