/** @format */

import { makeStyles } from '@material-ui/core';

const pill = {
	margin: 0,
	backgroundColor: '#3290c9',
	padding: 15,
	width: 30,
	height: 30,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	color: '#fff',
	borderRadius: '50%',
	marginRight: 10,
};

export const modalStyles = makeStyles(() => {
	return {
		backdrop: {
			position: 'fixed',
			inset: 0,
			backgroundColor: '#47474700',
			pointerEvents: 'none',
			transition: 'all 300ms ease',
			'&.open': {
				backgroundColor: '#47474770',
				pointerEvents: 'all',
			},
		},
		modal: {
			minWidth: '50%',
			minHeight: '50%',
			backgroundColor: '#fff',
			pointerEvents: 'none',
			transform: 'translateY(500px)',
			transition: 'all 300ms ease',
			opacity: 0,
			'&.open': {
				pointerEvents: 'all',
				transform: 'translateY(0)',
				opacity: 1,
			},
		},
	};
});

export const bookingStyles = makeStyles(() => {
	return {
		row: {
			'&:hover': {
				backgroundColor: '#eee',
				cursor: 'pointer',
			},
		},
	};
});

export const confirmStyles = makeStyles(() => {
	return {
		img: {
			width: '100%',
			height: 300,
			marginBottom: 55,
			marginTop: 55,
			padding: 20,
			'@media(max-width:620px)': {
				marginBottom: 20,
			},
		},
		grid: {
			display: 'grid',
			gridTemplateColumns: 'repeat(6, 1fr)',
			gap: 10,
			padding: 20,
			'@media(max-width:1280px)': {
				gridTemplateColumns: 'repeat(4, 1fr)',
			},
			'@media(max-width:800px)': {
				gridTemplateColumns: 'repeat(3, 1fr)',
			},
			'@media(max-width:620px)': {
				gridTemplateColumns: 'repeat(2, 1fr)',
			},
		},
		gridItem: {
			height: 60,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			border: '2px solid transparent',
			fontWeight: 900,
			backgroundColor: '#fff',
			fontSize: 30,
			cursor: 'not-allowed',
			'&.booked': {
				borderColor: '#943f2c',
				textDecoration: 'line-through',
				fontSize: 20,
				fontWeight: 700,
			},
			'&.available': {
				borderColor: '#d1d1d1',
				cursor: 'pointer',
			},
			'&.selected': {
				borderColor: '#18a126',
				color: '#18a126',
			},
		},
		actions: {
			padding: 20,
			display: 'flex',
			justifyContent: 'space-between',
		},
		pill: pill,
	};
});

export const viewBookingStyles = makeStyles(() => {
	return {
		pill: pill,
	};
});

export const movieStyles = makeStyles(() => {
	return {
		cardActions: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
		},
		minAgeBadge: {
			backgroundColor: '#b31b1b',
			padding: 10,
			borderRadius: '50%',
			color: '#fff',
		},
		thumbnail: {
			width: '100%',
			height: 300,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundPosition: '50% 50%',
			display: 'block',
			transition: 'all 200ms ease',
			'&:hover': {
				backgroundPosition: '-10% 0%',
			},
		},
	};
});

export const slideShowStyles = makeStyles(() => {
	return {
		slide: {
			height: '50vh',
		},
		image: {
			width: '100%',
			height: '100%',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			backgroundPosition: 'center center',
		},
	};
});
