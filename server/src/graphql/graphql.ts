/** @format */

import queries from './queries';
import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';

const schema = buildSchema(`
	scalar Date

	type Query {
		movie(id: String!): Movie
		movies: [Movie]
		instances(id: String!): [Instance]
    }

	type Movie {
		_id: String 
		createdAt: Date
		updatedAt: Date
		title: String
		description: String
		thumbnail: String
		header: String
		trailer: String
		minAge: Int
	}

	type Instance {
		_id: String 
		createdAt: Date
		updatedAt: Date
		seats: Int
		minAge: Int
		date: Date
		bookings: [Int]
	}

	type Booking {
		_id: String 
		createdAt: Date
		updatedAt: Date
		name: String
		email: String
		phone: String
		instance: Instance,
	}
`);

const root = {
	movie: queries.movie.one,
	movies: queries.movie.all,
	instances: queries.instance.many,
};

export default graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
});
