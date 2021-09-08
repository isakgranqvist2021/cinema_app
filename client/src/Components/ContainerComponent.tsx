/** @format */

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => {
	return {
		container: {
			padding: '50px 0',
			'@media (max-width:1270px)': {
				padding: '0 20px 50px 20px',
			},
		},
	};
});

export default function ContainerComponent(props: any): JSX.Element {
	const classes = useStyles();
	return (
		<div
			className={[
				'uk-container uk-background-default',
				classes.container,
			].join(' ')}>
			{props.children}
		</div>
	);
}
