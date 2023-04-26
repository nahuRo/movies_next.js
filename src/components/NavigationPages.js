"use client";

import { useState } from "react";

export default function NavigationPages() {
	const [page, setPage] = useState(1);

	return (
		<div className="space-x-4">
			<span>page: {page}</span>
			<button className="p-2 bg-black text-white" onClick={() => setPage(page + 1)}>
				+
			</button>
			<button className="p-2 bg-black text-white" onClick={() => setPage(page - 1)}>
				-
			</button>
		</div>
	);
}
