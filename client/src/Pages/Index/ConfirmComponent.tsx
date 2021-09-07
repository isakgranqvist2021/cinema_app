/** @format */

import React from 'react';
import ContainerComponent from 'Components/ContainerComponent';
import { useHistory } from 'react-router';
import { confirmStyles as useStyles } from 'Utils/hooks';

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
					disabled={!canContinue()}>
					Continue
				</button>
			</div>
		</ContainerComponent>
	);
}
