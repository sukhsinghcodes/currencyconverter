import { combineReducers } from 'redux';
import { ActionTypes } from './actions';

function reducer(state = {}, action) {
	switch (action.type) {
		case ActionTypes.SELECT_BASE_CURRENCY:
			return { ...state, base: action.currency };
		case ActionTypes.SELECT_RESULT_CURRENCY:
			return { ...state, result: action.currency };
		case ActionTypes.FETCH_RATES:
			return { ...state, isFetching: true };
		case ActionTypes.FETCH_RATES_SUCCESS:
			return { ...state, ...action.data, isFetching: false };
		case ActionTypes.FETCH_RATES_FAIL:
			return { ...state, error: action.error };

		default:
			return state;
	}
}

export default reducer;