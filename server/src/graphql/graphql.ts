/** @format */

import queries from './queries';
import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';

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
		description: String
	}
`);

const root = {
	user: queries.user.one,
	users: queries.user.all,
	movie: queries.movie.one,
	movies: queries.movie.all,
	admin: queries.user.admin,
};

export default graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
});
