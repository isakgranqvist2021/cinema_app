/** @format */

import { Request, Response } from 'express';
import { createOne } from '../../models/instance';

const create = async (req: Request, res: Response) => {
	console.log(req.body);

	try {
		await createOne(req.body);
		return res.json({
			message: 'instance has been created',
			success: true,
			data: null,
		});
	} catch (err) {
		console.log(err);
		return res.json({
			message: 'an error has occured',
			success: false,
			data: null,
		});
	}
};

export default { create };
