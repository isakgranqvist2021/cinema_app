/** @format */

import ContainerComponent from 'Components/ContainerComponent';
import { gql, useQuery } from '@apollo/client';
import { useParams, useHistory } from 'react-router';
import { viewBookingStyles as useStyles } from 'Utils/hooks';

interface Params {
	id: string;
}

const query = (id: string) => gql`
	query {
		booking(id: "${id}") {
			_id
            name
            email
            phone
            seats

            instance {
                _id
                date

                movie {
                    title
                    trailer
                    minAge
                }
            }
		}
	}
`;

export default function ViewBookingComponent(props: any): JSX.Element {
	const params = useParams<Params>();
	const { loading, error, data } = useQuery(query(params.id));
	const classes = useStyles();
	const history = useHistory();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;

	console.log(data);
	const embeddCode = data.booking.instance.movie.trailer.split('?v=')[1];

	return (
		<ContainerComponent>
			<div className='uk-card uk-card-default uk-card-body'>
				<iframe
					className='uk-width-100'
					height='720'
					src={'https://www.youtube.com/embed/' + embeddCode}
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen></iframe>
				<h3 className='uk-card-title'>
					Booking for: {data.booking.instance.movie.title}
				</h3>

				<div className='uk-flex uk-margin-bottom'>
					{data.booking.seats.map((seat: any) => (
						<p key={seat} className={classes.pill}>
							{seat}
						</p>
					))}
				</div>

				<ul className='uk-list uk-list-striped'>
					<li>{data.booking.name}</li>
					<li>{data.booking.email}</li>
					<li>{data.booking.phone}</li>
					<li>
						{new Date(data.booking.instance.date).toLocaleString()}
					</li>
					{data.booking.instance.movie.minAge > 0 && (
						<li>{data.booking.instance.movie.minAge}</li>
					)}
				</ul>
			</div>

			<button
				className='uk-button uk-button-default uk-margin-top'
				onClick={() => history.push('/', null)}>
				Home
			</button>
		</ContainerComponent>
	);
}
