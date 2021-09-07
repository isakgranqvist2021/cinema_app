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
	minAge: Number;
}

export interface Booking extends _O {
	email: string;
	phone: string;
	instance: mongoose.Schema.Types.ObjectId;
	seat: number;
}

export interface Instance extends _O {
	movie: mongoose.Schema.Types.ObjectId;
	date: Date;
	seats: Number;
	bookings: Number[];
	minAge: Number;
}
