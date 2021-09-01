/** @format */

export interface User {
	id: number;
	username: string;
}

export interface Movie {
	id: number;
	title: string;
	description: string;
}

export const users: User[] = [
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

export const movies: Movie[] = [
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
