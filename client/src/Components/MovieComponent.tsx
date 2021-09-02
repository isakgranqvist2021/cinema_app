/** @format */

import { useHistory } from 'react-router';

export default function MovieComponent(props: any): JSX.Element {
	const history = useHistory();

	const navigate = (e: any) => {
		e.preventDefault();
		history.push(`/create-booking/${props.title}/${new Date().valueOf()}`, {
			...props,
		});
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
				<h3 className='uk-card-title'>{props.title}</h3>
				<p>
					{props.description.substring(0, 200)}
					{props.description.length > 200 ? '...' : ''}
				</p>
				<a
					href={`/create-booking/${
						props.title
					}/${new Date().valueOf()}`}
					className='uk-button uk-button-primary'
					onClick={(e: any) => navigate(e)}>
					Read More
				</a>
			</div>
		</div>
	);
}
