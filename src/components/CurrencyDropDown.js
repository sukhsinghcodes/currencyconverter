import React, { PropTypes } from 'react';

export default class CurrencyDropDown extends React.Component {
	constructor(props) {
		super(props);
		this.onSelectCurrency = (e) => this._onSelectCurrency(e);
	}
	_onSelectCurrency(e) {
		console.log(e.target.value);
		this.props.onChangeCallback(e.target.value);
	}
	render() {
		let items;
		if (this.props.items) {
			items = this.props.items.map((item) => {
				return ( <option key={item} value={item}>{item}</option> );
			});
		}
		return(
			<select value={this.props.selected} onChange={this.onSelectCurrency}>{items}</select>
		);
	}
}

CurrencyDropDown.PropTypes = {
	items: PropTypes.array.isRequired,
	onChangeCallback: PropTypes.func.isRequired
};