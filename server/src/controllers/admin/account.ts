/** @format */

import { Request, Response } from 'express';

export async function create(req: Request, res: Response) {
	console.log(req.body);

	return res.json({});
}
