import React, { PropTypes } from 'react';

import ValueTextBox from './ValueTextBox';
import CurrencyDropDown from './CurrencyDropDown';

export default class App extends React.Component {
	render() {
		return(
			<div>
				<h1>Currency Converter</h1>
				<div>
					<ValueTextBox />
					<CurrencyDropDown />
				</div>
				<div>
					<ValueTextBox />
					<CurrencyDropDown />
				</div>
			</div>
		);
	}
}