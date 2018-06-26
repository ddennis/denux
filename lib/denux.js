'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var React = _react;
var Component = _react.Component;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 25-06-2018.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Context = React.createContext();

var Denux = function (_Component) {
	_inherits(Denux, _Component);

	function Denux() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Denux);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Denux.__proto__ || Object.getPrototypeOf(Denux)).call.apply(_ref, [this].concat(args))), _this), _this.state = _extends({}, _this.props.state, { dispatch: function dispatch(action) {
				_this.setState(function (state) {
					return _this.props.reducer(state, action);
				});
			}
		}), _temp), _possibleConstructorReturn(_this, _ret);
	}

	// Static utility function - stolen from redux


	_createClass(Denux, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				Context.Provider,
				{ value: this.state },
				this.props.children
			);
		}
	}]);

	return Denux;
}(Component);

/*

"peerDependencies": {
    "react": ">=15.0.1",
    "react-dom": ">=15.0.1"
},

*/


Denux.Consumer = Context.Consumer;

Denux.combineReducers = function (reducers) {
	return function () {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var action = arguments[1];

		return Object.keys(reducers).reduce(function (nextState, key) {
			nextState[key] = reducers[key](state[key], action);
			return nextState;
		}, {});
	};
};

module.exports = Denux;