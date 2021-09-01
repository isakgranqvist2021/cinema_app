/** @format */

import mongoose from 'mongoose';

interface MongooseObject {
	_id: mongoose.Schema.Types.ObjectId;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}

export interface User extends MongooseObject {
	username: string;
	password: string;
	admin: boolean;
}

export interface Movie extends MongooseObject {
	title: string;
	description: string;
}

export interface Booking extends MongooseObject {
	email: string;
	phone: string;
	movie: mongoose.Schema.Types.ObjectId;
	seat: number;
}
