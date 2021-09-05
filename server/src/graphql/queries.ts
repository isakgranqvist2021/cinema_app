/** @format */

import { findMany, findOne } from '../models/movie';

const movie = {
	one: async (params: any) => {
		console.log('query ');
		console.log(params);
		return await findOne({ _id: params.id });
	},
	all: async () => {
		console.log('find all');
		return await findMany({});
	},
};

export default {
	movie,
};
