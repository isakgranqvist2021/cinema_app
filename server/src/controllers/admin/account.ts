/** @format */

import { Request, Response } from 'express';
import { createOne } from '../../models/user';
import { usernameRegex, passwordRegex } from '../../utils/regex';

export async function create(req: Request, res: Response) {
	if (!req.body.username.trim() || !usernameRegex.test(req.body.username))
		return res.json({
			message: 'username malformed or too weak',
			success: false,
			data: null,
		});

	if (!req.body.password.trim() || !passwordRegex.test(req.body.password))
		return res.json({
			message: 'password malformed or too weak',
			success: false,
			data: null,
		});

	try {
		const result = await createOne(req.body.username, req.body.password);
		console.log(result);
		return res.json({});
	} catch (err) {
		console.log(err);
		return res.json({
			message: 'internal server error',
			success: false,
			data: null,
		});
	}
}
