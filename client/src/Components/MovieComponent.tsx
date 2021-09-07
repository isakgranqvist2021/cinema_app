/** @format */

import { useHistory } from 'react-router';
import { movieStyles as useStyles } from 'Utils/hooks';

export default function MovieComponent(props: any): JSX.Element {
	const history = useHistory();
	const classes = useStyles();

	let t = props.title;

	['-', ' ', '?', ':', '.', '!'].forEach((symbol: string) => {
		t = t.replaceAll(symbol, '_');
	});

	const href = ['/', t.toLowerCase(), '/', new Date().valueOf()].join('');

	const navigate = (e: any) => {
		e.preventDefault();
		history.push(href, props._id);
	};

	return (
		<div className='uk-card uk-card-default'>
			<div className='uk-card-media-top'>
				<img
					src={props.thumbnail}
					alt={props.title}
					style={{ width: '100%', height: 300 }}
				/>
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
						href={href}
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
