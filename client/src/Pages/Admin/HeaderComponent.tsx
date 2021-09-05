/** @format */

import { Link, useHistory } from 'react-router-dom';

export default function HeaderComponent(props: any): JSX.Element {
	const history = useHistory();

	const links = [
		{
			text: 'Publish Movie',
			className: 'uk-margin-right',
			action: () => props.setTab(0),
		},
		{
			text: 'Publish Date',
			className: 'uk-margin-right',
			action: () => props.setTab(1),
		},
		{
			text: 'Back To Site',
			className: '',
			action: () => history.push('/', null),
		},
	];

	return (
		<div className='uk-margin-bottom'>
			<div>
				{links.map((link: any) => (
					<a className={link.className} onClick={link.action}>
						{link.text}
					</a>
				))}
			</div>
		</div>
	);
}
