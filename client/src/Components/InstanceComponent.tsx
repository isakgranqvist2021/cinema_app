/** @format */

import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { POST } from 'Utils/http';

const query = gql`
	query {
		movies {
			_id
			title
		}
	}
`;

interface Instance {
	movie: string;
	date: string;
	seats: string;
}

const initialState: Instance = {
	movie: '',
	date: new Date().toString(),
	seats: '0',
};

export default function InstanceComponent(props: any): JSX.Element {
	const { loading, error, data } = useQuery(query);
	const [formData, setFormData] = React.useState<Instance>(initialState);

	const submit = async () => {
		const response = await POST(
			'/api/admin/instance/create',
			JSON.stringify(formData)
		);

		window.alert(response.message);
		if (response.success) {
			setFormData(initialState);
		}
	};

	const setField = (field: string, value: string): void => {
		setFormData({
			...formData,
			[field]: value,
		});
	};

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
				<select
					id='movie'
					className='uk-select'
					value={formData.movie}
					onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
						setField('movie', e.target.value)
					}>
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
				<input
					id='date'
					className='uk-input'
					type='datetime-local'
					value={formData.date}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setField('date', e.target.value)
					}
				/>
			</section>
			<section className='uk-margin-bottom'>
				<label
					htmlFor='seats'
					className='uk-display-block uk-margin-small-bottom'>
					Available Seats
				</label>
				<input
					id='seats'
					className='uk-input'
					type='number'
					value={formData.seats}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setField('seats', e.target.value)
					}
				/>
			</section>

			<div className='uk-flex uk-flex-right'>
				<button
					className='uk-button uk-button-primary'
					onClick={submit}>
					Add Date
				</button>
			</div>
		</div>
	);
}
