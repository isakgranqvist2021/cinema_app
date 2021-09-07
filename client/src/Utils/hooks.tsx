/** @format */

import { makeStyles } from '@material-ui/core';

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
			cursor: 'pointer',
			border: '2px solid transparent',
			fontWeight: 900,
			backgroundColor: '#fff',
			fontSize: 30,
			'&.booked': {
				borderColor: '#943f2c',
				textDecoration: 'line-through',
				fontSize: 20,
				fontWeight: 700,
			},
			'&.available': {
				borderColor: '#d1d1d1',
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
	};
});
