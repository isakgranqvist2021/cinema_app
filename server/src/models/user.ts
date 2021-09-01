/** @format */

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	createdAt: { type: Date, default: new Date().toLocaleDateString() },
	updatedAt: { type: Date, default: null },
});

const UserModel = mongoose.model('User', userSchema);
