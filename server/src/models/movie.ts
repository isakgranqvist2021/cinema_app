/** @format */

import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
	createdAt: { type: Date, default: new Date().toLocaleDateString() },
	updatedAt: { type: Date, default: null },
});

const MovieModel = mongoose.model('Movie', movieSchema);
