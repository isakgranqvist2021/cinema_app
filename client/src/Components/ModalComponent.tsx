/** @format */

import React from 'react';
import { modalStyles as useStyles } from 'Utils/hooks';
import { modalStore } from 'Store/store';

export default function ModalComponent(props: any): JSX.Element {
	const classes = useStyles();
	const [open, setOpen] = React.useState<boolean>(false);

	React.useEffect(() => {
		let ms = modalStore.subscribe(() => setOpen(modalStore.getState()));

		return () => ms();
	}, []);

	return (
		<div
			onClick={() => setOpen(false)}
			className={[
				classes.backdrop,
				'uk-flex uk-flex-center uk-flex-middle',
				open ? 'open' : '',
			].join(' ')}>
			<div
				onClick={(e: any) => e.stopPropagation()}
				className={[
					classes.modal,
					'uk-card uk-card-default uk-card-body',
					open ? 'open' : '',
				].join(' ')}>
				{props.children}
			</div>
		</div>
	);
}
