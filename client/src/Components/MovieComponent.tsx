/** @format */

export default function MovieComponent(props: any): JSX.Element {
	return (
		<div className='uk-card uk-card-default uk-card-body'>
			<h3 className='uk-card-title'>{props.title}</h3>
			<p>{props.description}</p>
		</div>
	);
}
