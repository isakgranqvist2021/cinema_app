/** @format */

import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
	createdAt: { type: Date, default: new Date().toLocaleDateString() },
	updatedAt: { type: Date, default: null },
});

const BookingModel = mongoose.model('Booking', bookingSchema);
