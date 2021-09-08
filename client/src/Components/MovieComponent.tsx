/** @format */

import React from 'react';
import AOS from 'aos';
import { useHistory } from 'react-router';
import { movieStyles as useStyles } from 'Utils/hooks';
import { createLinkFrom, addItemRvStorage } from 'Utils/helpers';
import { rvStore } from 'Store/store';

import 'aos/dist/aos.css';

export default function MovieComponent(props: any): JSX.Element {
	const history = useHistory();
	const classes = useStyles();

	const informant = React.useCallback((title: string, _id: string): void => {
		addItemRvStorage({ title, _id });
		rvStore.dispatch({
			type: 'reload',
			payload: null,
		});
	}, []);

	const navigate = (e: any) => {
		e.preventDefault();
		informant(props.title, props._id);
		history.push(createLinkFrom(props.title), props._id);
	};

	React.useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);
	return (
		<div className='uk-card uk-card-default' data-aos='zoom-in'>
			<div
				className={['uk-card-media-top', classes.thumbnail].join(' ')}
				style={{
					backgroundImage: `url(${props.thumbnail})`,
				}}></div>
			<div className='uk-card-body'>
				<h3
					className='uk-card-title uk-text-nowrap uk-overflow-hidden'
					style={{ textOverflow: 'ellipsis' }}>
					{props.title}
				</h3>
				<p>
					{props.description.substring(0, 200)}
					{props.description.length > 200 ? '...' : ''}
				</p>

				<div className={classes.cardActions}>
					<a
						href={createLinkFrom(props.title)}
						className='uk-button uk-button-primary'
						onClick={(e: any) => navigate(e)}>
						Read More
					</a>
					{props.minAge > 0 && (
						<div
							className={classes.minAgeBadge}
							title={`Minimum age to see this movie`}>
							{props.minAge}+
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
