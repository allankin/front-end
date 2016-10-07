'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = _react2.default.createClass({
	displayName: 'About',
	render: function render() {
		return _react2.default.createElement(
			'div',
			null,
			'About'
		);
	}
});
var Inbox = _react2.default.createClass({
	displayName: 'Inbox',
	render: function render() {
		return _react2.default.createElement(
			'div',
			null,
			'Inbox'
		);
	}
});
var Home = _react2.default.createClass({
	displayName: 'Home',
	render: function render() {
		return _react2.default.createElement(
			'div',
			null,
			'Home'
		);
	}
});

var App = _react2.default.createClass({
	displayName: 'App',
	getInitialState: function getInitialState() {
		return {
			route: window.location.hash.substr(1)
		};
	},
	componentDidMount: function componentDidMount() {
		var _this = this;

		window.addEventListener('hashchange', function () {
			_this.setState({
				route: window.location.hash.substr(1)
			});
		});
	},
	render: function render() {
		var Child = void 0;
		switch (this.state.route) {
			case '/about':
				Child = About;
				break;
			case '/inbox':
				Child = Inbox;
				break;
			default:
				Child = Home;
				break;
		};
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'h1',
				null,
				'App'
			),
			_react2.default.createElement(
				'ul',
				null,
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						'a',
						{ href: '#/about' },
						'About'
					)
				),
				_react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						'a',
						{ href: '#/inbox' },
						'Inbox'
					)
				)
			),
			_react2.default.createElement(Child, null)
		);
	}
});
render(_react2.default.createElement(App, null), document.body);