/** @format */

import { Request, Response } from 'express';
import { createOne } from '../../models/movie';

const create = async (req: Request, res: Response) => {
	try {
		const movie = await createOne(req.body);
		return res.json({
			message: 'movie has been created',
			success: true,
			data: null,
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
};
