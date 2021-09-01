/** @format */

import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

export interface Decoded {
	username: string;
	iat: Number;
	exp: Number;
	aud: string;
	iss: string;
}

export const newToken = (payload: any): string => {
	let buffer = fs.readFileSync(path.resolve('./key.pem'));

	let token = jwt.sign(payload, buffer.toString(), {
		algorithm: 'RS256',
		expiresIn: '6h',
		audience: process.env.CLIENT_ADDR,
		issuer: `${process.env.NODE_HOST}:${process.env.NODE_PORT}`,
	});

	return token;
};

export const verifyToken = (token: string): Decoded => {
	let cert = fs.readFileSync(path.resolve('./cert.pem'));
	let result: any = jwt.verify(token, cert, {
		algorithms: ['RS256'],
		audience: process.env.CLIENT_ADDR,
		issuer: `${process.env.NODE_HOST}:${process.env.NODE_PORT}`,
	});

	return result as Decoded;
};
