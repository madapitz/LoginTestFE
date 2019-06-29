import { SET_USER_DATA } from '../actionTypes/index';

export const setUserData = (payload) => {
	return { type: SET_USER_DATA, payload };
};