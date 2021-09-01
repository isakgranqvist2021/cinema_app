/** @format */

import UserComponent from 'Components/UserComponent';
import MovieComponent from 'Components/MovieComponent';

const styles = {
	minHeight: '100vh',
};

export default function HomeComponent(props: any): JSX.Element {
	return (
		<div
			className='uk-container uk-container-small uk-background-default'
			style={styles}>
			<UserComponent id='4' />
			<MovieComponent id='1' />
		</div>
	);
}
