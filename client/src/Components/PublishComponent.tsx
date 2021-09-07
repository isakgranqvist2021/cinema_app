/** @format */

import React from 'react';
import { POST } from 'Utils/http';

interface Movie {
	thumbnail: string;
	header: string;
	trailer: string;
	title: string;
	description: string;
	minAge: string;
}

const initialState: Movie = {
	thumbnail: '',
	header: '',
	trailer: '',
	title: '',
	description: '',
	minAge: '0',
};

export default function PublishComponent(props: any): JSX.Element {
	const [formData, setFormData] = React.useState<Movie>(initialState);

	const setField = (field: string, value: string): void =>
		setFormData({
			...formData,
			[field]: value,
		});

	const submit = async (): Promise<any> => {
		const response = await POST(
			'/api/admin/movie/create',
			JSON.stringify(formData)
		);

		window.alert(response.message);

		if (response.success) {
			setFormData(initialState);
		}
	};

	return (
		<div className='uk-card uk-card-default uk-card-body'>
			<section className='uk-margin-bottom'>
				<label
					htmlFor='thumbnail'
					className='uk-display-block uk-margin-small-bottom'>
					Thumbnail
				</label>
				<input
					type='text'
					className='uk-input'
					id='thumbnail'
					placeholder='Shershaah_film_poster.jpg'
					value={formData.thumbnail}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setField('thumbnail', e.target.value)
					}
				/>
			</section>
			<section className='uk-margin-bottom'>
				<label
					htmlFor='header'
					className='uk-display-block uk-margin-small-bottom'>
					Header
				</label>
				<input
					type='text'
					className='uk-input'
					id='header'
					placeholder='shershah-movie.jpg'
					value={formData.header}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setField('header', e.target.value)
					}
				/>
			</section>
			<section className='uk-margin-bottom'>
				<label
					htmlFor='trailer'
					className='uk-display-block uk-margin-small-bottom'>
					Trailer
				</label>
				<input
					type='text'
					className='uk-input'
					id='trailer'
					placeholder='https://www.youtube.com/watch?v=agIJTnpfFGA'
					value={formData.trailer}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setField('trailer', e.target.value)
					}
				/>
			</section>
			<section className='uk-margin-bottom'>
				<label
					htmlFor='title'
					className='uk-display-block uk-margin-small-bottom'>
					Title
				</label>
				<input
					type='text'
					className='uk-input'
					id='title'
					placeholder='Shershaah'
					value={formData.title}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setField('title', e.target.value)
					}
				/>
			</section>
			<section className='uk-margin-bottom'>
				<label
					htmlFor='age'
					className='uk-display-block uk-margin-small-bottom'>
					Minimum Age
				</label>
				<input
					type='text'
					className='uk-input'
					id='age'
					placeholder='18'
					value={formData.minAge}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setField('minAge', e.target.value)
					}
				/>
			</section>
			<section className='uk-margin-bottom'>
				<label
					htmlFor='description'
					className='uk-display-block uk-margin-small-bottom'>
					Description
				</label>
				<textarea
					className='uk-textarea'
					id='description'
					value={formData.description}
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
						setField('description', e.target.value)
					}></textarea>
			</section>

			<div className='uk-flex uk-flex-right'>
				<button
					className='uk-button uk-button-primary'
					onClick={submit}>
					Add Movie
				</button>
			</div>
		</div>
	);
}

/*
	title
	description
	trailer
	thumbnail
	header
*/
