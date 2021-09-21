/** @format */

import { RV, rvStore } from 'Store/store';

export const createLinkFrom = (title: string): string => {
	let t = title;

	['-', ' ', '?', ':', '.', '!'].forEach((symbol: string) => {
		t = t.replaceAll(symbol, '_');
	});

	return ['/', t.toLowerCase(), '/', new Date().valueOf()].join('');
};

export const addItemRvStorage = (rv: RV): any => {
	let existing = localStorage.getItem('rv'); 
	
	// Detta borde ha varit en swich statement
	if (existing === null)
		return localStorage.setItem('rv', JSON.stringify([rv]));

	let items = JSON.parse(existing);
	let alreadyExists = items.some((r: RV) => r._id === rv._id);

	if (!alreadyExists && items.length < 5)
		return localStorage.setItem('rv', JSON.stringify([...items, rv]));

	if (!alreadyExists && items.length > 5) {
		items.shift();
		return localStorage.setItem('rv', JSON.stringify([...items, rv]));
	}

	if (alreadyExists) {
		let index = items.findIndex((r: RV) => r._id === rv._id);
		items.splice(index, 1);
		return localStorage.setItem('rv', JSON.stringify([...items, rv]));
	}
};

export const addItemGateway = (title: string, _id: string): void => {
	addItemRvStorage({ title, _id });
	rvStore.dispatch({
		type: 'reload',
		payload: null,
	});
};

export const getRv = (): RV[] => {
	let existing = localStorage.getItem('rv');

	if (existing !== null) {
		return JSON.parse(existing);
	} else {
		return [];
	}
};

export const emailRegex =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const phoneRegex =
	/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
