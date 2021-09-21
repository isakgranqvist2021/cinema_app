/** @format */

import React from 'react';
import ContainerComponent from 'Components/ContainerComponent';
import ModalComponent from '../../Components/ModalComponent';
import { useHistory } from 'react-router';
import { confirmStyles as useStyles } from 'Utils/hooks';
import { modalStore } from 'Store/store';
import { POST } from 'Utils/http';
import { emailRegex, phoneRegex } from 'Utils/helpers';

// I den här filen skulle man kunna göra en variabel const NAME = 'name' och använda istället för strängen för att undvika typo error 
interface Instance {
	bookings: number[];
	createdAt: Date;
	updatedAt: Date;
	seats: number;
	_id: string;
}

interface Seat {
	selected: boolean;
	seat: number;
	available: boolean;
}

interface FormData {
	seats: number[];
	name: string;
	email: string;
	phone: string;
}

const Form = (props: any): JSX.Element => {
	const classes = props.classes;
	const [formData, setFormData] = React.useState<FormData>({
		seats: props.seats,
		name: '',
		email: '',
		phone: '',
	});
	const [error, setError] = React.useState({
		show: false,
		field: '',
		message: '',
	});

	const setField = (field: string, value: string): void => {
		if (error.show)
			setError({
				show: false,
				field: '',
				message: '',
			});

		setFormData({
			...formData,
			[field]: value,
		});
	};

	const submit = async (): Promise<any> => {
		if (!formData.name || formData.name.length <= 1) {
			setError({
				show: true,
				field: 'name',
				message: 'please enter your name',
			});
		} else if (!emailRegex.test(formData.email)) {
			setError({
				show: true,
				field: 'email',
				message: 'invalid email',
			});
		} else if (!phoneRegex.test(formData.phone)) {
			setError({
				show: true,
				field: 'phone',
				message: 'invalid phone number',
			});
		} else {
			const response = await POST(
				'/api/index/booking/create',
				JSON.stringify({
					...formData,
					instance: props._id,
					seats: formData.seats.map((s: any) => s.seat),
				})
			);
			console.log(response);
			window.alert(response.message);
			if (response.success) {
				props.history.push('/booking/view/' + response.data._id, null);
			}
		}
	};

	React.useEffect(
		() => setFormData({ ...formData, seats: props.seats }),
		[props.seats]
	);

	return (
		<ModalComponent>
			<h3 className='uk-heading-small'>{props.movie.title}</h3>
			<div className='uk-flex uk-margin-medium-bottom'>
				{formData.seats.map((sobject: any) => (
					<p key={sobject.seat} className={classes.pill}>
						{sobject.seat}
					</p>
				))}
			</div>

			<div className='form'>
				<section className='uk-margin-bottom'>
					<label
						htmlFor='name'
						className='uk-display-block uk-margin-small-bottom'>
						Full Name
					</label>
					<input
						type='text'
						className='uk-input'
						style={{
							borderColor:
								error.field === 'name' && error.show
									? 'crimson'
									: '#e5e5e5',
						}}
						id='name'
						placeholder='John Doe'
						value={formData.name}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setField('name', e.target.value)
						}
					/>
					{error.field === 'name' && error.show && ( // Här kan man 
						<p style={{ marginTop: 0, color: 'crimson' }}>
							{error.message}
						</p>
					)}
				</section>
				<section className='uk-margin-bottom'>
					<label
						htmlFor='email'
						className='uk-display-block uk-margin-small-bottom'>
						Email
					</label>
					<input
						type='text'
						className='uk-input'
						style={{
							borderColor:
								error.field === 'email' && error.show
									? 'crimson'
									: '#e5e5e5',
						}}
						id='email'
						placeholder='john_doe@gmail.com'
						value={formData.email}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setField('email', e.target.value)
						}
					/>
					{error.field === 'email' && error.show && (
						<p style={{ marginTop: 0, color: 'crimson' }}>
							{error.message}
						</p>
					)}
				</section>
				<section className='uk-margin-bottom'>
					<label
						htmlFor='phone'
						className='uk-display-block uk-margin-small-bottom'>
						Phone Number
					</label>
					<input
						type='text'
						className='uk-input'
						style={{
							borderColor:
								error.field === 'phone' && error.show
									? 'crimson'
									: '#e5e5e5',
						}}
						id='phone'
						placeholder='45 33 41 71 00'
						value={formData.phone}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setField('phone', e.target.value)
						}
					/>
					{error.field === 'phone' && error.show && (
						<p style={{ marginTop: 0, color: 'crimson' }}>
							{error.message}
						</p>
					)}
				</section>

				<p title='When the movie will start' className='uk-text-right'>
					{new Date(props.date).toLocaleString()}
				</p>

				<button
					className='uk-button uk-button-primary uk-display-block uk-margin-auto-left'
					onClick={submit}>
					Confirm My Booking
				</button>
			</div>
		</ModalComponent>
	);
};

export default function ConfirmComponent(props: any): JSX.Element {
	const history = useHistory();
	if (!props.location.state) {
		history.push('/', null);
	}

	const data: Instance = props.location.state;
	const classes = useStyles();

	const canContinue = React.useCallback((): boolean => {
		return seats.some((a: any) => a.selected);
	}, []);

	const getSeats = React.useCallback((): Seat[] => {
		return new Array(data.seats).fill(0).map((_, i: number) => {
			return {
				selected: false,
				seat: i,
				available: data.bookings.includes(i) ? false : true,
			};
		});
	}, []);

	const [seats, setSeats] = React.useState<Seat[]>(getSeats);

	const selectSeat = (s: any): void => {
		if (!s.available) return;
		let copy: Seat[] = seats;

		copy[s.seat].selected = !copy[s.seat].selected ? true : false;
		setSeats([...copy]);
	};

	return (
		<ContainerComponent>
			<img
				className={classes.img}
				src={process.env.PUBLIC_URL + '/movie-svgrepo-com.svg'}
			/>
			<div className={classes.grid}>
				{seats.map((s: any) => (
					<div
						key={s.seat}
						onClick={() => selectSeat(s)}
						title={
							s.available
								? `Seat ${s.seat + 1}`
								: 'Already booked'
						}
						className={[
							classes.gridItem,
							s.available ? 'available' : 'booked',
							s.selected ? 'selected' : '',
						].join(' ')}>
						{s.seat + 1}
					</div>
				))}
			</div>

			<div className={classes.actions}>
				<button
					title='Go Back'
					aria-label='Go Back'
					className='uk-button uk-button-default'
					onClick={() => history.goBack()}>
					<span uk-icon='chevron-left'></span>
				</button>
				<button
					title='Continue'
					aria-label='Continue'
					className='uk-button uk-button-primary'
					disabled={!canContinue()}
					onClick={() =>
						modalStore.dispatch({ type: 'set', payload: true })
					}>
					Continue
				</button>
			</div>
			<Form
				{...data}
				classes={classes}
				history={history}
				seats={seats.filter(
					(seat: any) => seat.selected && seat.available
				)}
			/>
		</ContainerComponent>
	);
}
