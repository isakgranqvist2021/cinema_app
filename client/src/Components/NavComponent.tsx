/** @format */

import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { createLinkFrom, addItemGateway } from 'Utils/helpers';
import { RV, rvStore } from 'Store/store';
import { authStore } from 'Store/store';

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
	const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

	const navigate = (e: any, to: string, payload: RV | null): void => {
		e.preventDefault();

		if (payload !== null) {
			addItemGateway(payload.title, payload._id);
			return history.push(to, payload._id);
		}

		return history.push(to, null);
	};

	const logout = (e: any): void => {
		e.preventDefault();
		localStorage.removeItem('token');
		history.push('/admin/login', null);
		window.alert("You've been logged out");
	};

	React.useEffect(() => {
		rvStore.subscribe(() => {
			let storage = localStorage.getItem('rv');
			if (storage !== null) {
				setRv(JSON.parse(storage).reverse());
			}
		});

		authStore.subscribe(() => {
			setLoggedIn(authStore.getState());
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
							<a href='/' onClick={(e) => navigate(e, '/', null)}>
								Hem
							</a>
						</li>
					</ul>
{
	//Den här komponenten är lite för stor tycker jag. Försök att håll dom under 100 rader
	//Följande kodblock kunde ha fått vara sin egen komponent tycker jag
}
					{rv.length > 0 && (
						<ul className='uk-nav uk-nav-default tm-nav uk-margin-top'>
							<li className='uk-nav-header'>
								Recently Viewed Movies
							</li>{' '}
							<li className='router-link-exact-active uk-active'>
								{rv.map((rvd: RV, i: number) => (
									<Link
										onClick={(e) =>
											navigate(
												e,
												createLinkFrom(rvd.title),
												{
													_id: rvd._id,
													title: rvd.title,
												}
											)
										}
										key={i}
										to={createLinkFrom(rvd.title)}>
										{rvd.title}
									</Link>
								))}
							</li>
						</ul>
					)}

					<ul className='uk-nav uk-nav-default tm-nav uk-margin-top'>
						<li className='uk-nav-header'>Administration</li>
						{loggedIn && (
							<div>
								<li className='router-link-exact-active uk-active'>
									<a
										href='/admin/dashboard'
										onClick={(e) =>
											navigate(
												e,
												'/admin/dashboard',
												null
											)
										}>
										Dashboard
									</a>
								</li>
								<li className='router-link-exact-active uk-active'>
									<a
										href='/admin/dashboard'
										onClick={(e) => logout(e)}>
										Log Out
									</a>
								</li>
							</div>
						)}
						{!loggedIn && (
							<li className='router-link-exact-active uk-active'>
								<a
									href='/admin/login'
									onClick={(e) =>
										navigate(e, '/admin/login', null)
									}>
									Log In
								</a>
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
}
