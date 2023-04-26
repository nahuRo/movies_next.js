class FetchData {
	URLbase = "https://api.themoviedb.org/3";

	constructor(type) {
		this.type = type;
	}

	async getAllData(parameter, page = 1) {
		const data = await fetch(
			`${this.URLbase}/${this.type}/${parameter}?api_key=${process.env.API_KEY}&language=es&page=${page}`
		);
		return await data.json();
	}

	async getData(id) {
		const data = await fetch(
			`${this.URLbase}/${this.type}/${id}?api_key=${process.env.API_KEY}&language=es`
		);
		return await data.json();
	}

	async getSpecficData(id, parameter) {
		const data = await fetch(
			`${this.URLbase}/${this.type}/${id}/${parameter}?api_key=${process.env.API_KEY}&language=es`
		);
		return await data.json();
	}
}

export const movie = new FetchData("movie");
export const collection = new FetchData("collection");
export const tv_show = new FetchData("tv");
