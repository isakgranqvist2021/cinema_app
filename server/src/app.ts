/** @format */

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import log from './middlewares/log';
import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
import queries from './queries';

dotenv.config();
const app: express.Express = express();

app.use(cors());
app.use('*', log);

const schema = buildSchema(`
    type Query {
		movie(id: Int!): Movie
		movies: [Movie]
		user(id: Int!): User
		admin: Boolean
    }

	type User {
		id: Int
		username: String
	}

	type Movie {
		id: Int
		title: String
	}
`);

const root = {
	user: queries.user.one,
	users: queries.user.all,
	movie: queries.movie.one,
	movies: queries.movie.all,
	admin: queries.user.admin,
};

app.use(
	'/graphql',
	graphqlHTTP({
		schema: schema,
		rootValue: root,
		graphiql: true,
	})
);

app.listen(process.env.NODE_PORT, () =>
	console.log(
		`Server listening on ${process.env.NODE_HOST}:${process.env.NODE_PORT}`
	)
);
