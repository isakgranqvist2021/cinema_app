/** @format */

import ContainerComponent from 'Components/ContainerComponent';
import MovieComponent from 'Components/MovieComponent';
import SlideshowComponent from 'Components/SlideshowComponent';
import { gql, useQuery } from '@apollo/client';

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
	const { loading, error, data } = useQuery(query);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;

	return (
		<ContainerComponent>
			<div className='uk-margin-large-bottom'>
				<SlideshowComponent
					images={data.movies.map((m: any) => m.header)}
				/>
			</div>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
					gap: 50,
				}}>
				{data.movies.map((v: any, i: number) => (
					<MovieComponent key={i} {...v} />
				))}
			</div>
		</ContainerComponent>
	);
}
