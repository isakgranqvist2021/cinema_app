/** @format */

import ContainerComponent from 'Components/ContainerComponent';
import { gql, useQuery } from '@apollo/client';

export default function BookingComponent(props: any): JSX.Element {
	const query = gql`
		query {
			movie(id: "${props.location.state}") {
				_id
				createdAt
				updatedAt
				title
				description
				thumbnail
				header
				trailer
			}

			instances(id: "${props.location.state}") {
				_id
				date
			}
		}
	`;

	const { loading, error, data } = useQuery(query);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;

	const embeddCode = data.movie.trailer.split('?v=')[1];

	console.log(data);
	return (
		<ContainerComponent>
			<iframe
				className='uk-width-100'
				height='720'
				src={'https://www.youtube.com/embed/' + embeddCode}
				title='YouTube video player'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen></iframe>
			<h1>{data.movie.title}</h1>
			<p>{data.movie.description}</p>
		</ContainerComponent>
	);
}
