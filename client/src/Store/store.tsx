/** @format */

import { createStore } from 'redux';

interface AuthState {
	loggedIn: boolean;
}

interface Action {
	type: string;
	payload: AuthState;
}

const initialState: AuthState = {
	loggedIn: false,
};

function authStore(state: AuthState = initialState, action: Action) {
	switch (action.type) {
		case 'set':
			return (state = action.payload);
		default:
			return state;
	}
}

export default createStore(authStore);
