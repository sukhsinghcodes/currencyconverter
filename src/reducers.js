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
			const currencies = [...Object.keys(action.data.rates), action.data.base],
				resultCurrency = Object.keys(action.data.rates)[0];

			return { 
				...state, 
				...action.data, 
				isFetching: false, 
				currencies: currencies, 
				result: resultCurrency, 
				resultValue: action.data.rates[resultCurrency].toFixed(2), 
				baseValue: 1.00 
			};
		case ActionTypes.FETCH_RATES_FAIL:
			return { ...state, error: action.error };
		case ActionTypes.BASE_VALUE_CHANGE:
			const newResultValue = action.value*state.rates[state.result]
			return { ...state, baseValue: action.value, resultValue: newResultValue.toFixed(2) };
		case ActionTypes.RESULT_VALUE_CHANGE:
			const newBaseValue = action.value/state.rates[state.result]
			return { ...state, resultValue: action.value, baseValue: newBaseValue.toFixed(2) };

		default:
			return state;
	}
}

export default reducer;