/** @format */

import React from 'react';
import { POST } from 'Utils/http';
import { useHistory } from 'react-router-dom';

interface FormData {
	username: string;
	password: string;
}

const LoginComponent = (props: any): JSX.Element => {
	const history = useHistory();
	const [formData, setFormData] = React.useState<FormData>({
		username: '',
		password: '',
	});

	const submit = async () => {
		const response = await POST(
			'/api/auth/login',
			JSON.stringify(formData)
		);

		window.alert(response.message);
		if (response.success) {
			console.log(response);
			localStorage.setItem('token', response.data);
			history.push('/admin/dashboard', null);
		}
	};

	return (
		<div className='uk-container uk-container-xsmall uk-margin-xlarge-top'>
			<form className='uk-card uk-card-default uk-card-body uk-width-1-2@m uk-margin-auto'>
				<section className='uk-margin-bottom'>
					<label
						htmlFor='username'
						className='uk-display-block uk-margin-small-bottom'>
						Username
					</label>
					<input
						type='text'
						className='uk-input'
						placeholder='Username'
						id='username'
						value={formData.username}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setFormData({
								...formData,
								username: e.target.value,
							})
						}
					/>
				</section>
				<section className='uk-margin-bottom'>
					<label
						htmlFor='password'
						className='uk-display-block uk-margin-small-bottom'>
						Password
					</label>
					<input
						type='password'
						className='uk-input'
						placeholder='Password'
						autoComplete='current-password'
						id='password'
						value={formData.password}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => // Mycket proffesionellt att du använder React.ChangeEvent
							setFormData({
								...formData,
								password: e.target.value,
							})
						}
					/>
				</section>
				<button
					type='button'
					className='uk-button uk-button-default uk-display-block uk-margin-auto-left'
					onClick={submit}>
					Log in
				</button>
			</form>
		</div>
	);
};

export default LoginComponent;
