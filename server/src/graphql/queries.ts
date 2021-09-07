/** @format */

import {
	findMany as findManyMovies,
	findOne as findOneMovie,
} from '../models/movie';
import { findOne as findOneBooking } from '../models/booking';
import { findMany as findManyInstances } from '../models/instance';

const movie = {
	one: async (params: any) => await findOneMovie({ _id: params.id }),
	all: async () => await findManyMovies({}),
};

export const instance = {
	many: async (params: any) => await findManyInstances({ movie: params.id }),
};

export const booking = {
	one: async (params: any) => await findOneBooking({ _id: params.id }),
};

export default {
	movie,
	instance,
	booking,
};
