/** @format */

import express, { Request, Response } from 'express';
const router = express.Router();

import movie from '../controllers/admin/movie';

// if user can access this endpoint they're an
// administrator and a valid jwt was found in the auth header
router.get('/', (req: Request, res: Response) =>
	res.json({ message: '', success: true, data: true })
);

router.post('/movie/create', movie.create);

export default router;
