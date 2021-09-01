/** @format */

import { Request, Response, NextFunction } from 'express';

export default function log(req: Request, res: Response, next: NextFunction) {
	console.log(req.method, req.originalUrl, new Date());
	return next();
}
