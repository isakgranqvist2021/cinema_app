/** @format */

import mongoose, { Schema } from 'mongoose';

const bookingSchema = new mongoose.Schema({
	createdAt: { type: Date, default: new Date().toLocaleDateString() },
	updatedAt: { type: Date, default: null },
	name: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: String, required: true },
	instance: { type: Schema.Types.ObjectId, ref: 'Instance' },
});

const BookingModel = mongoose.model('Booking', bookingSchema);

export const createOne = async (payload: any): Promise<any> => {};
