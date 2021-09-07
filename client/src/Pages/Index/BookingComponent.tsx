/** @format */

import ContainerComponent from 'Components/ContainerComponent';
import { gql, useQuery } from '@apollo/client';
import { useHistory, useParams } from 'react-router';
import { bookingStyles as useStyles } from 'Utils/hooks';

interface Params {
	title: string;
	today: string;
}

const query = (id: string) => gql`
		query {
			movie(id: "${id}") {
				_id
				createdAt
				updatedAt
				title
				description
				thumbnail
				header
				trailer
			}

			instances(id: "${id}") {
				_id
				date
				createdAt
				seats
				bookings
			}
		}
`;

export default function BookingComponent(props: any): JSX.Element {
	const history = useHistory();
	const params = useParams<Params>();
	const classes = useStyles();
	if (!props.location.state) {
		history.push('/', null);
	}

	const navigate = (e: any, inst: any): void => {
		const url = ['/', params.title, '/', params.today, '/confirm'].join('');
		history.push(url, inst);
	};

	const { loading, error, data } = useQuery(query(props.location.state));
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;

	const embeddCode = data.movie.trailer.split('?v=')[1];

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

			<div className='uk-overflow-auto'>
				<table className='uk-table uk-table-small uk-table-divider'>
					<thead>
						<tr>
							<th>#</th>
							<th>Date</th>
							<th>Seats Left</th>
						</tr>
					</thead>
					<tbody>
						{data.instances.map((inst: any, i: number) => (
							<tr
								className={classes.row}
								onClick={(e: any) => navigate(e, inst)}>
								<td>{i + 1}</td>
								<td>{new Date(inst.date).toLocaleString()}</td>
								<td>{inst.seats - inst.bookings.length}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<button
				title='Go Back'
				aria-label='Go Back'
				className='uk-button uk-button-default uk-margin-medium-top'
				onClick={() => history.goBack()}>
				<span uk-icon='chevron-left'></span>
			</button>
		</ContainerComponent>
	);
}
