/** @format */

import React from 'react';
import { POST } from 'Utils/http';

interface Movie {
	thumbnail: string;
	header: string;
	trailer: string;
	title: string;
	description: string;
}

const movie: Movie = {
	thumbnail:
		'https://upload.wikimedia.org/wikipedia/en/9/91/Shershaah_film_poster.jpg',
	header: 'https://enewsdelta.com/wp-content/uploads/2021/07/shershah-movie.jpg',
	trailer: 'https://www.youtube.com/watch?v=agIJTnpfFGA',
	title: 'Shershaah',
	description:
		'This is a story of a PVC awardee brave Indian soldier - Capt. Vikram Batra, who shot to fame and became a household name during the Kargil War in 1999. His indomitable spirit and his unflinching courage in chasing the Pakistani soldiers out of Indian territory contributed immensely in India finally winning the Kargil War in 1999.',
};

export default function PublishComponent(props: any): JSX.Element {
	const [formData, setFormData] = React.useState<Movie>({
		thumbnail: '',
		header: '',
		trailer: '',
		title: '',
		description: '',
	});

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
	};

	return (
		<div className='uk-card uk-card-default uk-card-body'>
			<h1>Add Movie</h1>
			<section className='uk-margin-bottom'>
				<label
					htmlFor=''
					className='uk-display-block uk-margin-small-bottom'>
					Thumbnail
				</label>
				<input
					type='text'
					className='uk-input'
					placeholder='https://upload.wikimedia.org/wikipedia/en/9/91/Shershaah_film_poster.jpg'
					value={formData.thumbnail}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setField('thumbnail', e.target.value)
					}
				/>
			</section>
			<section className='uk-margin-bottom'>
				<label
					htmlFor=''
					className='uk-display-block uk-margin-small-bottom'>
					Header
				</label>
				<input
					type='text'
					className='uk-input'
					placeholder='https://enewsdelta.com/wp-content/uploads/2021/07/shershah-movie.jpg'
					value={formData.header}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setField('header', e.target.value)
					}
				/>
			</section>
			<section className='uk-margin-bottom'>
				<label
					htmlFor=''
					className='uk-display-block uk-margin-small-bottom'>
					Trailer
				</label>
				<input
					type='text'
					className='uk-input'
					placeholder='https://www.youtube.com/watch?v=agIJTnpfFGA'
					value={formData.trailer}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setField('trailer', e.target.value)
					}
				/>
			</section>
			<section className='uk-margin-bottom'>
				<label
					htmlFor=''
					className='uk-display-block uk-margin-small-bottom'>
					Title
				</label>
				<input
					type='text'
					className='uk-input'
					placeholder='Shershaah'
					value={formData.title}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
						setField('title', e.target.value)
					}
				/>
			</section>
			<section className='uk-margin-bottom'>
				<label
					htmlFor=''
					className='uk-display-block uk-margin-small-bottom'>
					Description
				</label>
				<textarea
					id=''
					className='uk-textarea'
					placeholder='This is a story of a PVC awardee brave Indian soldier - Capt. Vikram Batra, who shot to fame and became a household name during the Kargil War in 1999. His indomitable spirit and his unflinching courage in chasing the Pakistani soldiers out of Indian territory contributed immensely in India finally winning the Kargil War in 1999.'
					value={formData.description}
					onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
						setField('description', e.target.value)
					}></textarea>
			</section>

			<div className='uk-flex uk-flex-between'>
				<button
					className='uk-button uk-button-default'
					onClick={() => setFormData({ ...movie })}>
					Populate Form
				</button>
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
