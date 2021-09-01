/** @format */

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

import { usernameRegex } from '../utils/regex';

const usernameValidation = {
	validator: (email: string): boolean => usernameRegex.test(email),
	message: 'please pick a better username',
};

const userSchema = new mongoose.Schema({
	createdAt: { type: Date, default: Date },
	updatedAt: { type: Date, default: null },
	admin: { type: Boolean, default: false },
	password: { type: String, required: true },
	username: {
		type: String,
		required: true,
		unique: true,
		validate: usernameValidation,
	},
});

const UserModel = mongoose.model('User', userSchema);

export const createOne = async (username: string, password: string) => {
	try {
		let salt = bcrypt.genSaltSync(10);
		let hash = bcrypt.hashSync(password, salt);
		return await new UserModel({ username, password: hash }).save();
	} catch (err) {
		if (err.code === 11000)
			return Promise.reject('username already exists');

		return Promise.reject('internal server error');
	}
};

export const findOneAndCompare = async (username: string, password: string) => {
	try {
		const user: any = await UserModel.findOne({ username });
		if (!user) return Promise.reject('user not found');

		let match: boolean = bcrypt.compareSync(password, user.password);
		return match ? user : Promise.reject('wrong password');
	} catch (err) {
		console.log(err);
		return Promise.reject('internal server error');
	}
};

export const findOne = async (username: string) => {
	try {
		const user: any = await UserModel.findOne({ username });
		if (!user) return Promise.reject('user not found');
		return Promise.resolve(user);
	} catch (err) {
		return Promise.reject('internal server error');
	}
};
