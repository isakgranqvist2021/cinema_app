/** @format */

import express from 'express';
const router = express.Router();

import { create } from './controllers/admin/account';

router.post('/account/create', create);

export default router;
