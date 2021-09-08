/** @format */

import { RV } from 'Store/store';

export const createLinkFrom = (title: string): string => {
	let t = title;

	['-', ' ', '?', ':', '.', '!'].forEach((symbol: string) => {
		t = t.replaceAll(symbol, '_');
	});

	return ['/', t.toLowerCase(), '/', new Date().valueOf()].join('');
};

export const addItemRvStorage = (rv: RV): any => {
	let existing = localStorage.getItem('rv');

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

export const getRv = (): RV[] => {
	let existing = localStorage.getItem('rv');

	if (existing !== null) {
		return JSON.parse(existing);
	} else {
		return [];
	}
};
