/** @format */

import { createStore } from 'redux';

export interface RV {
	title: string;
	_id: string;
}

interface Action {
	type: string;
	payload: any;
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

export const rvStore = createStore(
	(state: null = null, action: Action) => state
);
