/** @format */

export default function ContainerComponent(props: any): JSX.Element {
	return (
		<div
			className='uk-container uk-background-default'
			style={{ padding: '50px 0' }}>
			{props.children}
		</div>
	);
}
