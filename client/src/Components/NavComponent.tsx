/** @format */

import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { createLinkFrom, getRv } from 'Utils/helpers';
import { RV, rvStore } from 'Store/store';

const useStyles = makeStyles(() => {
	return {
		menuBtn: {
			position: 'fixed',
			top: 0,
			left: 0,
			marginTop: 15,
			marginLeft: 15,
			zIndex: 2,
			backgroundColor: '#fff',
			padding: 20,
			borderRadius: '50%',
			color: '#000',
			boxShadow: '0 5px 15px rgb(0 0 0 / 8%)',
			display: 'block',
			transition: 'all 200ms ease',
			'&:hover': {
				boxShadow: '0 28px 50px rgb(0 0 0 / 16%)',
			},
		},
	};
});

declare const UIkit: any;

export default function NavComponent(): JSX.Element {
	const classes = useStyles();
	const history = useHistory();
	const [rv, setRv] = React.useState<RV[]>([]);

	const navigate = (e: any, to: string): void => {
		e.preventDefault();
		history.push(to, null);
	};

	React.useEffect(() => {
		rvStore.subscribe(() => {
			let storage = localStorage.getItem('rv');
			if (storage !== null) {
				setRv(JSON.parse(storage).reverse());
			}
		});

		return history.listen(() => {
			let nav = document.getElementById('offcanvas-flip');
			UIkit.offcanvas(nav).hide();
		});
	}, []);

	return (
		<div>
			<a
				className={classes.menuBtn}
				type='button'
				uk-toggle='target: #offcanvas-flip'>
				<span uk-icon='icon: menu'></span>
			</a>

			<div
				id='offcanvas-flip'
				uk-offcanvas='mode: push; overlay: true'
				className='uk-offcanvas '
				style={{ display: 'block' }}>
				<div className='uk-offcanvas-bar'>
					<button
						className='uk-offcanvas-close uk-icon uk-close'
						type='button'
						uk-close=''></button>

					<ul className='uk-nav uk-nav-default tm-nav'>
						<li className='uk-nav-header'>Navigation</li>{' '}
						<li className='router-link-exact-active uk-active'>
							<a href='/' onClick={(e) => navigate(e, '/')}>
								Hem
							</a>
						</li>
					</ul>

					{rv.length > 0 && (
						<ul className='uk-nav uk-nav-default tm-nav uk-margin-top'>
							<li className='uk-nav-header'>
								Recently Viewed Movies
							</li>{' '}
							<li className='router-link-exact-active uk-active'>
								{rv.map((rvd: RV, i: number) => (
									<Link
										key={i}
										to={createLinkFrom(rvd.title)}>
										{rvd.title}
									</Link>
								))}
							</li>
						</ul>
					)}
				</div>
			</div>
		</div>
	);
}
