/** @format */

import { Request, Response } from 'express';
import { createOne, findOneAndCompare } from '../../models/user';
import { usernameRegex, passwordRegex } from '../../utils/regex';
import { newToken } from '../../utils/jwt';

const create = async (req: Request, res: Response) => {
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
		const user = await createOne(req.body.username, req.body.password);
		return res.json({
			message: 'account has been created',
			success: true,
			data: { ...user, password: null },
		});
	} catch (err) {
		return res.json({
			message: err,
			success: false,
			data: null,
		});
	}
};

const login = async (req: Request, res: Response) => {
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
		const user = await findOneAndCompare(
			req.body.username,
			req.body.password
		);

		let token = newToken({ username: user.username });

		return res.json({
			message: "you've been authorized",
			success: true,
			data: token,
		});
	} catch (err) {
		return res.json({
			message: err,
			success: false,
			data: null,
		});
	}
};

export default {
	create,
	login,
};
