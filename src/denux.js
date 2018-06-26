/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 25-06-2018.
 */


import React, { Component } from 'react'

const Context = React.createContext();

export default class Denux extends Component {

	static Consumer = Context.Consumer;

	// Static utility function - stolen from redux
	static combineReducers = (reducers) => {
		return (state = {}, action) => {
			return Object.keys(reducers).reduce(
				(nextState, key) => {
					nextState[key] = reducers[key](state[key], action );
					return nextState;
				},
				{}
			);
		};
	};


	state = {
		...this.props.state, dispatch:(action) =>{
			this.setState(
				state => this.props.reducer(state, action)
			);
		}
	};


	render() {
		return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
	}
}

/*

"peerDependencies": {
    "react": ">=15.0.1",
    "react-dom": ">=15.0.1"
},

*/