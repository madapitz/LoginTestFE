import * as actionTypes from '../actionTypes/index';

const initialState = {
	token: null,
	name: null,
	email: null,
	username: null
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_USER_DATA:
			state.token = action.payload.token;
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.username = action.payload.username;
			break;
		default:
			return state;
	}
	return state;
};

export default rootReducer;