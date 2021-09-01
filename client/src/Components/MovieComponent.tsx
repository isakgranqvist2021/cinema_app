/** @format */

import { gql, useQuery } from '@apollo/client';

export default function MovieComponent(props: any): JSX.Element {
	const query = gql`
		query {
			movie(id: ${props.id}) {
				id
				title
			}
		}
	`;
	const { loading, error, data } = useQuery(query);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<div>
			<p>Movie ID: {data.movie.id}</p>
			<p>Movie Title: {data.movie.title}</p>
		</div>
	);
}
