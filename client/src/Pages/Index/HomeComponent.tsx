/** @format */

import React from 'react';
import ContainerComponent from 'Components/ContainerComponent';
import MovieComponent from 'Components/MovieComponent';
import SlideshowComponent from 'Components/SlideshowComponent';
import { gql, useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/styles';
import { rvStore } from 'Store/store';

const useStyles = makeStyles(() => {
	return {
		grid: {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
			gap: 50,
		},
		title: {
			margin: '40px 0',
			fontSize: '3rem',
			fontWeight: 900,
		},
	};
});

const query = gql`
	query {
		movies {
			_id
			thumbnail
			title
			description
			minAge
			header
		}
	}
`;

export default function HomeComponent(props: any): JSX.Element {
	const classes = useStyles();
	const { loading, error, data } = useQuery(query);

	React.useEffect(() => {
		rvStore.dispatch({ type: 'reload', payload: null });
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;

	return (
		<ContainerComponent>
			<SlideshowComponent
				images={data.movies.map((m: any) => m.header)}
			/>
			<h1 className={classes.title}>Movie Theater Booking</h1>
			<div className={classes.grid}>
				{data.movies.map((v: any, i: number) => (
					<MovieComponent key={i} {...v} />
				))}
			</div>
		</ContainerComponent>
	);
}
