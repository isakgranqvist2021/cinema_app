/** @format */

import { createStore } from 'redux';

interface AuthState {
	loggedIn: boolean;
}

interface Action {
	type: string;
	payload: AuthState;
}

function authStore(state: AuthState = { loggedIn: false }, action: Action) {
	switch (action.type) {
		case 'set':
			return (state = action.payload);
		default:
			return state;
	}
}

export default createStore(authStore);
