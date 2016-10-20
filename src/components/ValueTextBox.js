import React, { PropTypes } from 'react';

export default class ValueTextBox extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<input type="text" placeholder="Enter amount" />
		);
	}
}
ValueTextBox.PropTypes = {
	symbol: PropTypes.string.isRequired
};
