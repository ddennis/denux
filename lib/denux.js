'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hasNestedObject = require('./utils/hasNestedObject');

var _hasNestedObject2 = _interopRequireDefault(_hasNestedObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 20-06-2018.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Context = _react2.default.createContext();

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

	_createClass(Denux, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (process.env.NODE_ENV !== 'production') {
				if (this.props.reducers) {
					console.error("DENUX ERROR:", "Please use the prop name 'reducer' not reducers ");
					throw new TypeError("Reducer obj should be provided as prop name 'reducer' see console");
				}

				if (!this.props.reducer) {
					console.log("DENUX NOTICE:", "You did not provide a reducer obj");
				}
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				Context.Provider,
				{ value: this.state },
				this.props.children
			);
		}
	}], [{
		key: 'combineReducers',


		// Static utility function - stolen from redux
		value: function combineReducers(reducers) {

			if (process.env.NODE_ENV !== 'production') {

				if ((0, _hasNestedObject2.default)(reducers)) {
					throw new TypeError('a value in the reducer is not a function. Please see the console');
					return {};
				}
			}

			return function () {
				var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var action = arguments[1];

				return Object.keys(reducers).reduce(function (nextState, key) {
					nextState[key] = reducers[key](state[key], action);
					return nextState;
				}, {});
			};
		}
	}]);

	return Denux;
}(_react.Component);

Denux.Consumer = Context.Consumer;
exports.default = Denux;
;