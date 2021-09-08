/** @format */

import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import log from './middlewares/log';
import jwt from './middlewares/jwt';
import database from './utils/database';

import graphql from './graphql/graphql';
import admin from './routers/admin';
import index from './routers/index';
import auth from './routers/auth';

dotenv.config();
database.connect();
const app: express.Express = express();

app.use('/', express.static('./public'));
app.use(cors());
app.use(express.json());
app.use('*', log);

app.use('/graphql', graphql);
app.use('/api/auth', auth);
app.use('/api/index', index);
app.use('/api/admin', jwt, admin);

app.get('*', (req: Request, res: Response) => {
	return res.sendFile('index.html', { root: './public' });
});

app.listen(process.env.NODE_PORT, () =>
	console.log(
		`Server listening on ${process.env.NODE_HOST}:${process.env.NODE_PORT}`
	)
);
