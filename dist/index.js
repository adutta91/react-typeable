'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Typeable = function (_Component) {
    _inherits(Typeable, _Component);

    function Typeable(props) {
        _classCallCheck(this, Typeable);

        var _this = _possibleConstructorReturn(this, (Typeable.__proto__ || Object.getPrototypeOf(Typeable)).call(this, props));

        _this.state = {
            pos: 0
        };
        return _this;
    }

    _createClass(Typeable, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.typingTimeout(this.state.pos + 1, this.props.speed, this.props.variance);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearTimeout(this.timeout);
        }
    }, {
        key: 'typingTimeout',
        value: function typingTimeout(pos, delay, variance) {
            var _this2 = this;

            // determine whether offset is positive or negative
            var signVal = Math.random() < 0.5 ? -1 : 1;

            // offset to emulate variable differences between keystrokes
            var offset = variance * Math.random() * signVal;

            var speed = delay + offset;

            // sanity bounds: don't let it go too fast or slow
            if (speed < delay - variance) speed = delay - variance;
            if (speed > delay + variance) speed = delay + variance;

            // override for spaces - lowest possible speed given variance
            if (this.props.text.slice(0, pos + 1)[pos] == ' ') speed = delay - variance;

            this.timeout = setTimeout(function () {
                _this2.setState({ pos: pos });

                if (_this2.state.pos < _this2.props.text.length) {
                    _this2.typingTimeout(pos + 1, delay, variance);
                } else {
                    if (_this2.props.done) _this2.props.done();
                }
            }, speed);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearTimeout(this.timeout);
        }
    }, {
        key: 'renderText',
        value: function renderText() {
            var text = this.props.text.slice(0, this.state.pos);

            if (this.props.transformText) {
                return this.props.transformText(text);
            } else {
                return text;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'typeable' },
                this.renderText(),
                this.props.showCursor ? _react2.default.createElement(
                    'span',
                    { className: 'cursor' },
                    '|'
                ) : null
            );
        }
    }]);

    return Typeable;
}(_react.Component);

exports.default = Typeable;
;

Typeable.propTypes = {
    text: _propTypes2.default.string,
    speed: _propTypes2.default.number,
    variance: _propTypes2.default.number,
    done: _propTypes2.default.func,
    transformText: _propTypes2.default.func,
    showCursor: _propTypes2.default.bool
};