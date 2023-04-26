import Image from "next/image";

export default async function CardCast({ actor }) {
	const imagePath = "https://image.tmdb.org/t/p/original";

	const { name, profile_path, character, id } = actor;
	return (
		<div className="shadow-2xl w-[140px] h-[255px] rounded-lg">
			<div className="w-[138px] h-[175px]">
				<Image
					src={imagePath + profile_path}
					alt={name}
					width={200}
					height={200}
					className="w-full h-full object-cover rounded-t-lg"
				/>
			</div>
			<span className="text-sm">{name}</span>
			<span className="text-xs">{character}</span>
		</div>
	);
}
