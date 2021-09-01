/** @format */

import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { BrowserRouter, Switch } from 'react-router-dom';
import { client, gql } from 'Utils/graphql';

import authReducer from 'Store/store';

import LoadingComponent from 'Pages/LoadingComponent';
import ErrorComponent from 'Pages/ErrorComponent';
import HomeComponent from 'Pages/HomeComponent';
import BookingComponent from 'Pages/BookingComponent';
import PublishComponent from 'Pages/PublishComponent';

const requireLogin = async (to: any, from: any, next: any) => {
	const response = await client.query({
		query: gql`
			query admin {
				admin
			}
		`,
	});

	authReducer.dispatch({
		type: 'set',
		payload: {
			loggedIn: response.data.admin,
		},
	});

	if (to.meta.auth) return response.data.admin ? next() : next.redirect('/');

	return next();
};

interface Route {
	path: string;
	component: React.FunctionComponent;
	auth: boolean;
}

const routes: Route[] = [
	{
		path: '/admin/publish',
		component: PublishComponent,
		auth: true,
	},
	{
		path: '/',
		component: HomeComponent,
		auth: false,
	},
	{
		path: '/book',
		component: BookingComponent,
		auth: false,
	},
	{
		path: '*',
		component: ErrorComponent,
		auth: false,
	},
];

export default function OutletComponent(props: any): JSX.Element {
	return (
		<BrowserRouter>
			<GuardProvider
				guards={[requireLogin]}
				loading={LoadingComponent}
				error={ErrorComponent}>
				<Switch>
					{routes.map((route: Route) => (
						<GuardedRoute
							key={route.path}
							path={route.path}
							component={route.component}
							meta={{ auth: route.auth }}
							exact></GuardedRoute>
					))}
				</Switch>
			</GuardProvider>
		</BrowserRouter>
	);
}
