/** @format */

import mongoose from 'mongoose';

interface _O {
	_id: mongoose.Schema.Types.ObjectId;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
}

export interface User extends _O {
	username: string;
	password: string;
	admin: boolean;
}

export interface Movie extends _O {
	title: string;
	description: string;
	thumbnail: string;
	header: string;
	trailer: string;
}

export interface Booking extends _O {
	email: string;
	phone: string;
	movie: mongoose.Schema.Types.ObjectId;
	seat: number;
}
