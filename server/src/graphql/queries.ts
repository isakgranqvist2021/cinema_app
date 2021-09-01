/** @format */

import { users, User, movies, Movie } from './data';

const user = {
	one: (params: any): User => users.find((m: User) => m.id === params.id),
	all: (): User[] => users,
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
