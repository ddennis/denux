/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 26-06-2018.
 */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';

const Context = React.createContext();

export class Denux extends Component {
	constructor(...args) {
		var _temp;

		return _temp = super(...args), this.state = _extends({}, this.props.state, { dispatch: action => {
				this.setState(state => this.props.reducer(state, action));
			}
		}), _temp;
	}

	// Static utility function - stolen from redux
	static combineReducers(reducers) {
		return (state = {}, action) => {
			return Object.keys(reducers).reduce((nextState, key) => {
				nextState[key] = reducers[key](state[key], action);
				return nextState;
			}, {});
		};
	}

	render() {
		return React.createElement(
			Context.Provider,
			{ value: this.state },
			this.props.children
		);
	}

}
Denux.Consumer = Context.Consumer;