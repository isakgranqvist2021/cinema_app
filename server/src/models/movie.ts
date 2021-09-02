/** @format */

import mongoose from 'mongoose';

import { Movie } from '../utils/types';

const movieSchema = new mongoose.Schema({
	createdAt: { type: Date, default: new Date().toLocaleDateString() },
	updatedAt: { type: Date, default: null },
	title: { type: String, required: true },
	description: { type: String, required: true },
	thumbnail: { type: String, required: true },
	header: { type: String, required: true },
	trailer: { type: String, required: true },
});

const MovieModel = mongoose.model('Movie', movieSchema);

export const createOne = async (movie: Movie) => {
	try {
		return await new MovieModel(movie).save();
	} catch (err) {
		return Promise.reject('internal server error');
	}
};

export const findMany = async (filter: any) => {
	try {
		return await MovieModel.find(filter);
	} catch (err) {
		return Promise.reject('internal server error');
	}
};

export const findOne = async (filter: any) => {
	try {
		return await MovieModel.findOne(filter);
	} catch (err) {
		return Promise.reject('internal server error');
	}
};
