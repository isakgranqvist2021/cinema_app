/** @format */

import queries from './queries';
import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';

const schema = buildSchema(`
    type Query {
		movie(id: String!): Movie
		movies: [Movie]
    }

	type Movie {
		_id: String 
		title: String
		description: String
		createdAt: String,
		updatedAt: String
		thumbnail: String
		header: String
		trailer: String
	}
`);

const root = {
	movie: queries.movie.one,
	movies: queries.movie.all,
};

export default graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
});
