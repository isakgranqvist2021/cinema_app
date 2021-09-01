/** @format */

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

import { usernameRegex, passwordRegex } from '../utils/regex';

const usernameValidation = {
	validator: (email: string): boolean => usernameRegex.test(email),
	message: 'please pick a better username',
};

const userSchema = new mongoose.Schema({
	createdAt: { type: Date, default: new Date().toLocaleDateString() },
	updatedAt: { type: Date, default: null },
	admin: { type: Boolean, default: false },
	username: {
		type: String,
		required: true,
		unique: true,
		validate: usernameValidation,
	},
	password: { type: String, required: true },
});

userSchema.pre('save', function (next: any) {
	try {
		if (this !== undefined && !this.isModified('password')) return next();

		if (!passwordRegex.test(this.password))
			return next('please pick a stronger password');

		let salt = bcrypt.genSaltSync(10);
		let hash = bcrypt.hashSync(this.password, salt);

		this.password = hash;
		return next();
	} catch (err) {
		return next(err);
	}
});

const UserModel = mongoose.model('User', userSchema);

export const createOne = async (username: string, password: string) => {
	try {
		return await new UserModel({ username, password }).save();
	} catch (err) {
		return Promise.reject(err);
	}
};
