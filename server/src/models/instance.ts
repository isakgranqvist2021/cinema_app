/** @format */

import mongoose from 'mongoose';

import { Instance } from '../utils/types';

/*
    An instance is an instance of movie - a movie can possess multiple instances
    which can be used to create a new booking
*/

const instanceSchema = new mongoose.Schema({
	createdAt: { type: Date, default: new Date().toLocaleDateString() },
	updatedAt: { type: Date, default: null },
	movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
	date: { type: Date, required: true },
	seats: { type: Number, required: true },
	bookings: [Number],
});

const InstanceModel = mongoose.model('Instance', instanceSchema);

export const createOne = async (instance: Instance): Promise<any> => {
	try {
		return await new InstanceModel(instance).save();
	} catch (err) {
		return Promise.reject(err);
	}
};

export const findMany = async (filter: any): Promise<any> => {
	try {
		return await InstanceModel.find(filter);
	} catch (err) {
		return Promise.reject(err);
	}
};
