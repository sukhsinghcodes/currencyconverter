import React, { PropTypes } from 'react';

export default class CurrencyDropDown extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<select></select>
		);
	}
}

CurrencyDropDown.PropTypes = {
	items: PropTypes.array.isRequired
};