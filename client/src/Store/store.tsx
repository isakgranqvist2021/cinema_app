/** @format */

import { createStore } from 'redux';

interface Action {
	type: string;
	payload: boolean;
}

export const authStore = createStore(
	(state: boolean = false, action: Action): boolean => {
		switch (action.type) {
			case 'set':
				return action.payload;
			default:
				return state;
		}
	}
);

export const modalStore = createStore(
	(state: boolean = false, action: Action): boolean => {
		switch (action.type) {
			case 'set':
				return action.payload;
			default:
				return state;
		}
	}
);
