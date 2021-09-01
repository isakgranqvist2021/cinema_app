/** @format */

import queries from './queries';
import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';

const schema = buildSchema(`
    type Query {
		movie(id: Int!): Movie
		movies: [Movie]
		admin: Boolean
    }

	type Movie {
		id: Int
		title: String
		description: String
	}
`);

const root = {
	movie: queries.movie.one,
	movies: queries.movie.all,
	admin: queries.user.admin,
};

export default graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
});
