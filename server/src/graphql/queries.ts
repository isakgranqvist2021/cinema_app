/** @format */

import { movies, Movie } from './data';

const user = {
	admin: (): boolean => false,
};

const movie = {
	one: (params: any): Movie => movies.find((m: Movie) => m.id === params.id),
	all: (): Movie[] => movies,
};

export default {
	user,
	movie,
};
