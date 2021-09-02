/** @format */

import UserComponent from 'Components/UserComponent';
import MovieComponent from 'Components/MovieComponent';
import { gql, useQuery } from '@apollo/client';

export default function HomeComponent(props: any): JSX.Element {
	const query = gql`
		query {
			movies {
				id
				title
				description
			}
		}
	`;
	const { loading, error, data } = useQuery(query);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<div
			className='uk-container uk-background-default'
			style={{ padding: '50px 0' }}>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr',
					gap: 50,
				}}>
				{data.movies.map((v: any, i: number) => (
					<MovieComponent key={i} id='1' {...v} />
				))}
			</div>
		</div>
	);
}
