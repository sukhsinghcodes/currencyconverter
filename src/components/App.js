import React, { PropTypes } from 'react';

import ValueTextBox from './ValueTextBox';
import CurrencyDropDown from './CurrencyDropDown';

import { fetchRates } from '../actions';


export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log('asdsa');
		let { dispatch } = this.props;
		dispatch(fetchRates());
	}
	render() {
		return(
			<div>
				<h1>Currency Converter</h1>
				<h2>Base: {this.props.base}</h2>
				<p>Rates last updated {this.props.date}</p>
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
