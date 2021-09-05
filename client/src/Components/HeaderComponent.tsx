/** @format */

import { useHistory } from 'react-router-dom';

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
				{links.map((link: any, i: number) => (
					<a
						key={i}
						className={[
							link.className,
							props.active === i ? 'uk-text-secondary' : '',
						].join(' ')}
						onClick={link.action}>
						{link.text}
					</a>
				))}
			</div>
		</div>
	);
}
