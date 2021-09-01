/** @format */

import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const settings = {};

async function connect() {
	try {
		await mongoose.connect(process.env.DB_URI, settings);
		console.log('MongoDB has connected');
	} catch (err) {
		return Promise.reject('MongoDB connection error');
	}
}

export default {
	connect,
};
