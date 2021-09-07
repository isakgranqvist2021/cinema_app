/** @format */

import queries from './queries';
import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';

const schema = buildSchema(`
    type Query {
		movie(id: String!): Movie
		movies: [Movie]
		instances(id: String!): [Instance]
    }

	type Movie {
		_id: String 
		createdAt: String
		updatedAt: String
		title: String
		description: String
		thumbnail: String
		header: String
		trailer: String
		minAge: Int
	}

	type Instance {
		_id: String 
		createdAt: String
		updatedAt: String
		seats: Int
		minAge: Int
		date: String
		bookings: [Int]
	}

	type Booking {
		_id: String 
		createdAt: String
		updatedAt: String
		name: String
		email: String
		phone:String,
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
