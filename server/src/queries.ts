/** @format */

interface User {
	id: number;
	username: string;
}

interface Movie {
	id: number;
	title: string;
	description: string;
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
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ",
	},
	{
		id: 2,
		title: 'Free Guy',
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ",
	},
	{
		id: 3,
		title: 'The Suicide Squad',
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ",
	},
	{
		id: 4,
		title: 'Outer Banks',
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ",
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
