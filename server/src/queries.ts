/** @format */

interface User {
	id: number;
	username: string;
}

interface Movie {
	id: number;
	title: string;
}

const users = [
	{
		id: 1,
		username: 'Mark',
	},
	{
		id: 2,
		username: 'Peter',
	},
	{
		id: 3,
		username: 'John',
	},
	{
		id: 4,
		username: 'Andrew',
	},
	{
		id: 5,
		username: 'Jenna',
	},
];

const movies: Movie[] = [
	{
		id: 1,
		title: 'No Time To Die',
	},
	{
		id: 2,
		title: 'Free Guy',
	},
	{
		id: 3,
		title: 'The Suicide Squad',
	},
	{
		id: 4,
		title: 'Outer Banks',
	},
];

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
