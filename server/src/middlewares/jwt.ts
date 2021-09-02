/** @format */

import { Request, Response, NextFunction } from 'express';
import { verifyToken, Decoded } from '../utils/jwt';
import { findOne } from '../models/user';
import dotenv from 'dotenv';
dotenv.config();

const loggedIn = async (req: Request, res: Response, next: NextFunction) => {
	if (!req.headers['authorization'])
		return res.json({
			message: 'only authorized users can perform that action',
			success: false,
			data: null,
		});

	try {
		let decoded: Decoded = verifyToken(req.headers['authorization']);
		const user = await findOne(decoded.username);
		if (user.admin) return next();

		return res.json({
			message: 'only authorized users can perform that action',
			success: false,
			data: null,
		});
	} catch (err) {
		return res.json({
			message: 'only authorized users can perform that action',
			success: false,
			data: null,
		});
	}
};

export default loggedIn;
