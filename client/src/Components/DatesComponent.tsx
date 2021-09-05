/** @format */

import { gql, useQuery } from '@apollo/client';

interface MovieDate {}

const query = gql`
	query {
		movies {
			_id
			title
		}
	}
`;

export default function DatesComponent(props: any): JSX.Element {
	const { loading, error, data } = useQuery(query);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error...</p>;

	return (
		<div className='uk-card uk-card-default uk-card-body'>
			<section className='uk-margin-bottom'>
				<label
					htmlFor='movie'
					className='uk-display-block uk-margin-small-bottom'>
					Movie Title
				</label>
				<select id='movie' className='uk-select'>
					{data.movies.map((movie: any, i: number) => (
						<option value={movie._id} key={i} id='movie'>
							{movie.title}
						</option>
					))}
				</select>
			</section>
			<section className='uk-margin-bottom'>
				<label
					htmlFor='date'
					className='uk-display-block uk-margin-small-bottom'>
					Date
				</label>
				<input id='date' className='uk-input' type='datetime-local' />
			</section>
			<section className='uk-margin-bottom'>
				<label
					htmlFor='seats'
					className='uk-display-block uk-margin-small-bottom'>
					Available Seats
				</label>
				<input id='seats' className='uk-input' type='number' />
			</section>

			<div className='uk-flex uk-flex-right'>
				<button className='uk-button uk-button-primary'>
					Add Date
				</button>
			</div>
		</div>
	);
}
