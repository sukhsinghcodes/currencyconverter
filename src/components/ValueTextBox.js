import React, { PropTypes } from 'react';

export default class ValueTextBox extends React.Component {
	constructor(props) {
		super(props);
		this.onValueChange = (e) => this._onValueChange(e);
	}
	_onValueChange(e) {
		console.log(e.target.value);
		this.props.onChangeCallback(e.target.value);
	}
	render() {
		return (
			<input type="text" placeholder="Enter amount" value={this.props.value} onChange={this.onValueChange} />
		);
	}
}
ValueTextBox.PropTypes = {
	value: PropTypes.number.isRequired,
	onChangeCallback: PropTypes.func.isRequired
};
