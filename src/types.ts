export interface NewsAPI {
	sources: Source[];
	categories: Category[];
	items: Article[];
}

export interface Source {
	id: number;
	name: string;
}

export interface Category {
	id: number;
	name: string;
}

export interface Article {
	category_id: number;
	date: Date;
	description: string;
	id: number;
	image: string;
	lang: string;
	source_id: number;
	title: string;
}
