/** @format */
import express from 'express';
const router = express.Router();

import account from '../controllers/auth/auth';

router.post('/register', account.create);
router.post('/login', account.login);

export default router;
