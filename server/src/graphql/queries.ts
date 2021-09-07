/** @format */

import { findMany as findManyMovies, findOne } from '../models/movie';
import { findMany as findManyInstances } from '../models/instance';

const movie = {
	one: async (params: any) => await findOne({ _id: params.id }),
	all: async () => await findManyMovies({}),
};

export const instance = {
	many: async (params: any) => await findManyInstances({ movie: params.id }),
};

export default {
	movie,
	instance,
};
