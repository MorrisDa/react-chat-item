"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var notifier = {
	listeners: [],
	timer: false,
	subscribe: function subscribe(cll) {
		this.listeners.push(cll);
		return cll;
	},
	unsubscribe: function unsubscribe(cll) {
		this.listeners.splice(this.listeners.indexOf(cll), 1);
	},
	handle: function handle() {
		var _this = this;

		if (this.timer) {
			clearTimeout(this.timer);
		}

		this.timer = setTimeout(function () {
			_this.listeners.forEach(function (cll) {
				window.requestAnimationFrame(cll);
			});
			_this.timer = false;
		}, 200);
	}
};

window.addEventListener("resize", notifier.handle.bind(notifier));

var ChatItem = function (_Component) {
	_inherits(ChatItem, _Component);

	function ChatItem(props) {
		_classCallCheck(this, ChatItem);

		var _this2 = _possibleConstructorReturn(this, (ChatItem.__proto__ || Object.getPrototypeOf(ChatItem)).call(this, props));

		_this2.container = _react2.default.createRef();

		_this2.state = {
			showAvatar: true
		};
		return _this2;
	}

	_createClass(ChatItem, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.sizeCheck();
			this.handler = notifier.subscribe(this.sizeCheck.bind(this));
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			notifier.unsubscribe(this.handler);
		}
	}, {
		key: "sizeCheck",
		value: function sizeCheck() {
			var condition = this.container.current.offsetWidth >= 160;

			if (this.state.showAvatar !== condition) {
				this.setState({
					showAvatar: condition
				});
			}
		}
	}, {
		key: "render",
		value: function render() {
			var _props = this.props,
			    title = _props.title,
			    subtitle = _props.subtitle,
			    url = _props.url,
			    minWidth = _props.minWidth,
			    maxWidth = _props.maxWidth;


			return _react2.default.createElement(
				"div",
				{ className: "tw-wrapper", ref: this.container, style: { maxWidth: this.props.maxWidth, minWidth: this.props.minWidth } },
				this.state.showAvatar ? _react2.default.createElement(
					"div",
					{ className: "tw-avatar", style: { backgroundImage: "url(\"" + url + "\")" } },
					_react2.default.createElement("div", { className: "tw-status tw-status-avatar", style: { background: this.props.statusColor } })
				) : _react2.default.createElement("div", { className: "tw-status", style: { background: this.props.statusColor } }),
				_react2.default.createElement(
					"div",
					{ className: "tw-text-wrapper" },
					_react2.default.createElement(
						"div",
						{ className: "tw-text tw-title" },
						title
					),
					_react2.default.createElement(
						"div",
						{ className: "tw-text" },
						subtitle
					)
				)
			);
		}
	}]);

	return ChatItem;
}(_react.Component);

ChatItem.defaultProps = {
	url: 'https://via.placeholder.com/150x150',
	statusColor: 'green',
	title: 'Harry Robinson',
	subtitle: 'Online | 14h',
	minWidth: 'auto',
	maxWidth: 'auto'
};

exports.default = ChatItem;