/** @format */

import express from 'express';
const router = express.Router();

import booking from '../controllers/index/booking';

router.post('/booking/create', booking.create);

export default router;
