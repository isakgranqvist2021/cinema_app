/** @format */

import { Request, Response, NextFunction } from 'express';

export default function loggedIn(
	req: Request,
	res: Response,
	next: NextFunction
) {
	return next();
}
