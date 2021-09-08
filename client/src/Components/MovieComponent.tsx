/** @format */

import React from 'react';
import AOS from 'aos';
import { useHistory } from 'react-router';
import { movieStyles as useStyles } from 'Utils/hooks';
import { createLinkFrom, addItemGateway } from 'Utils/helpers';

import 'aos/dist/aos.css';

export default function MovieComponent(props: any): JSX.Element {
	const history = useHistory();
	const classes = useStyles();

	const navigate = (e: any) => {
		e.preventDefault();
		addItemGateway(props.title, props._id);
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
				onClick={(e: any) => navigate(e)}>
				<div
					className={classes.image}
					style={{
						backgroundImage: `url(${props.thumbnail})`,
					}}></div>
			</div>
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
