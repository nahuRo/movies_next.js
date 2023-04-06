"use client";

export default function Error({ error, reset }) {
	return (
		<div>
			Error: {error.menssage}
			<button onClick={() => reset()}>Reload</button>
		</div>
	);
}
