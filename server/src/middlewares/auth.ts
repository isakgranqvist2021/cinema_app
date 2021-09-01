/** @format */

import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
dotenv.config();

export default function loggedIn(
	req: Request,
	res: Response,
	next: NextFunction
) {
	let isAdmin =
		req.headers['bypass_token'] ===
		process.env.BYPASS_TOKEN; /* || user.admin */

	if (isAdmin) {
		// check if user is admin
		return next();
	} else {
		return res.json({
			message: 'only authorized users can perform that action',
			success: false,
			data: null,
		});
	}
}
