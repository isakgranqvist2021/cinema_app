/** @format */

import express, { Request, Response } from 'express';
const router = express.Router();

import movie from '../controllers/admin/movie';
import instance from '../controllers/admin/instance';

// if user can access this endpoint they're an
// administrator and a valid jwt was found in the auth header
router.get('/', (req: Request, res: Response) =>
	res.json({ message: '', success: true, data: true })
);

router.post('/movie/create', movie.create);
router.post('/instance/create', instance.create);

export default router;
