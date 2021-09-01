/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './AppComponent';
import reportWebVitals from './reportWebVitals';

import { client, ApolloProvider } from 'Utils/graphql';

import './index.css';

ReactDOM.render(
	<ApolloProvider client={client}>
		<AppComponent />
	</ApolloProvider>,
	document.getElementById('root')
);

reportWebVitals();
