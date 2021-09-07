/** @format */

import mongoose, { Schema } from 'mongoose';

const bookingSchema = new mongoose.Schema({
	createdAt: { type: Date, default: new Date().toLocaleDateString() },
	updatedAt: { type: Date, default: null },
	name: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: String, required: true },
	seats: [Number],
	instance: { type: Schema.Types.ObjectId, ref: 'Instance' },
});

const BookingModel = mongoose.model('Booking', bookingSchema);

export const createOne = async (payload: any): Promise<any> => {
	try {
		return await new BookingModel(payload).save();
	} catch (err) {
		return Promise.reject(err);
	}
};

export const findOne = async (filter: any): Promise<any> => {
	try {
		let res = await BookingModel.findOne(filter).populate([
			{
				path: 'instance',
				model: 'Instance',
				populate: {
					path: 'movie',
					model: 'Movie',
				},
			},
		]);
		console.log(res);
		return res;
	} catch (err) {
		return Promise.reject(err);
	}
};
