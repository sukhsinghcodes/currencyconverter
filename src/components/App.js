import React, { PropTypes } from 'react';

import ValueTextBox from './ValueTextBox';
import CurrencyDropDown from './CurrencyDropDown';

import { fetchRates, updateBase, updateResult, selectBase, selectResult } from '../actions';


export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.onBaseValueChange = (value) => this._onBaseValueChange(value);
		this.onResultValueChange = (value) => this._onResultValueChange(value);

		this.onBaseCurrencyChange = (value) => this._onBaseCurrencyChange(value);
		this.onResultCurrencyChange = (value) => this._onResultCurrencyChange(value);
	}
	componentDidMount() {
		this.props.dispatch(fetchRates());
	}
	_onBaseValueChange(value) {
		this.props.dispatch(updateBase(value));
	}
	_onResultValueChange(value) {
		this.props.dispatch(updateResult(value));
	}
	_onBaseCurrencyChange(value) {
		this.props.dispatch(selectBase(value));
		this.props.dispatch(fetchRates(value));
	}
	_onResultCurrencyChange(value) {
		this.props.dispatch(selectResult(value));
	}
	render() {
		return(
			<div>
				<h1>Currency Converter</h1>
				<p><small>Rates last updated {this.props.date}.</small></p>
				<div>
					<ValueTextBox value={this.props.baseValue} onChangeCallback={this.onBaseValueChange} />
					<CurrencyDropDown items={this.props.currencies} selected={this.props.base} onChangeCallback={this.onBaseCurrencyChange} />
				</div>
				<div>
					<ValueTextBox value={this.props.resultValue} onChangeCallback={this.onResultValueChange} />
					<CurrencyDropDown items={this.props.currencies} selected={this.props.result} onChangeCallback={this.onResultCurrencyChange} />
				</div>
			</div>
		);
	}
}
