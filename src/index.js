//React
import React from 'react';
import ReactDOM from 'react-dom';

//Redux
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers';

import AppC from './containers/App';

const loggerMiddleware = createLogger();

const store = createStore(
	reducer,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);

ReactDOM.render(
	<Provider store={store}>
		<AppC />
	</Provider>
	, document.getElementById('content')
);