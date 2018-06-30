/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 20-06-2018.
 */


import React, { Component } from 'react'
import hasNestedObject from './utils/hasNestedObject'
const Context = React.createContext();

export default class Denux extends Component {

	static Consumer = Context.Consumer;

	// Static utility function - stolen from redux
	static combineReducers(reducers){

		if( process.env.NODE_ENV !== 'production'  ){

			if(hasNestedObject(reducers) ){
				throw new TypeError('a value in the reducer is not a function. Please see the console')
				return {}
			}
		}

		return (state = {}, action) =>{
			return Object.keys(reducers).reduce(
				(nextState, key) =>{
					nextState[key] = reducers[key](state[key], action);
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

	componentDidMount(){
		if( process.env.NODE_ENV !== 'production'  ){
			if(this.props.reducers ){
				console.error("DENUX ERROR:", "Please use the prop name 'reducer' not reducers ");
				throw new TypeError("Reducer obj should be provided as prop name 'reducer' see console")
			}

			if(!this.props.reducer ){
				console.log("DENUX NOTICE:", "You did not provide a reducer obj");
			}
		}
	}


	render(){
		return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
	}

};




