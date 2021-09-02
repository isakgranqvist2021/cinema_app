/** @format */

import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	gql,
} from '@apollo/client';
import { serverAddr } from './http';

const client = new ApolloClient({
	uri: serverAddr + '/graphql',
	cache: new InMemoryCache(),
});

export { client, ApolloProvider, gql };
