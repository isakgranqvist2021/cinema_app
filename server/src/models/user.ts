/** @format */

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

import { usernameRegex, passwordRegex } from 'utils/regex';

const usernameValidation = {
	validator: (email: string): boolean => usernameRegex.test(email),
	message: 'please pick a better username',
};

const userSchema = new mongoose.Schema({
	createdAt: { type: Date, default: new Date().toLocaleDateString() },
	updatedAt: { type: Date, default: null },
	admin: { type: Boolean, default: false },
	username: { type: String, required: true, validate: usernameValidation },
	password: { type: String, required: true },
});

userSchema.pre('save', async (next: any) => {
	try {
		let t: any = this; // not sure why this works but it does
		if (t !== undefined && !t.isModified('password')) return next();

		if (!passwordRegex.test(t.password))
			return next('please pick a stronger password');

		let salt = bcrypt.genSaltSync(10);
		let hash = bcrypt.hashSync(t.password, salt);

		t.password = hash;
		return next();
	} catch (err) {
		return next(err);
	}
});

const UserModel = mongoose.model('User', userSchema);

export const createOne = async () => {};
