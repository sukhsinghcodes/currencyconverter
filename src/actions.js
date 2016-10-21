import fetch from 'isomorphic-fetch';

export const ActionTypes = {
	SELECT_BASE_CURRENCY: 'SELECT_BASE_CURRENCY',
	SELECT_RESULT_CURRENCY: 'SELECT_RESULT_CURRENCY',
	FETCH_RATES: 'FETCH_RATES',
	FETCH_RATES_SUCCESS: 'FETCH_RATES_SUCCESS',
	FETCH_RATES_FAIL: 'FETCH_RATES_FAIL',
	BASE_VALUE_CHANGE: 'BASE_VALUE_CHANGE',
	RESULT_VALUE_CHANGE: 'RESULT_VALUE_CHANGE'
};

export function requestRates() {
	return {
		type: ActionTypes.FETCH_RATES
	};
}
export function requestRatesSuccess(data) {
	return {
		type: ActionTypes.FETCH_RATES_SUCCESS,
		data
	};
}
export function requestRatesFailure(error) {
	return {
		type: ActionTypes.FETCH_RATES_FAIL,
		error
	};
}
export function selectBase(currency) {
	return {
		type: ActionTypes.SELECT_BASE_CURRENCY,
		currency
	};
}
export function selectResult(currency) {
	return {
		type: ActionTypes.SELECT_RESULT_CURRENCY,
		currency
	};
}
export function updateBase(value) {
	return {
		type: ActionTypes.BASE_VALUE_CHANGE,
		value
	};
}
export function updateResult(value) {
	return {
		type: ActionTypes.RESULT_VALUE_CHANGE,
		value
	};
}

// Dispatched on load and when a new base is selected
export function fetchRates(currency) {
	return (dispatch) => {
		dispatch(requestRates());

		let result = fetch('http://api.fixer.io/latest' + (currency ? '?base='+currency : ''))
			.then(response => {
				if (response.status >= 400) {
					console.error(error);
					return dispatch(requestRatesFailure(error));
				}
				return response.json();
			})
			.then((data) => {
				console.log(data);
				return dispatch(requestRatesSuccess(data));
			});
	}
}