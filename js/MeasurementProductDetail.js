var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MeasurementProductDetail = function (_React$Component) {
    _inherits(MeasurementProductDetail, _React$Component);

    function MeasurementProductDetail(props) {
        _classCallCheck(this, MeasurementProductDetail);

        var _this = _possibleConstructorReturn(this, (MeasurementProductDetail.__proto__ || Object.getPrototypeOf(MeasurementProductDetail)).call(this, props));

        _this.state = { info: props.info };
        return _this;
    }

    _createClass(MeasurementProductDetail, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "tab-content col-md-9 col-sm-12" },
                React.createElement(
                    "div",
                    { className: "tab-pane active" },
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "div",
                            { className: "wv-checkbox " },
                            React.createElement("input", { type: "checkbox", className: "settings-check" }),
                            React.createElement(
                                "label",
                                null,
                                this.state.info.name
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "div",
                            { className: "source-metadata overflow" },
                            React.createElement(
                                "h3",
                                null,
                                this.state.info.longname
                            ),
                            React.createElement(
                                "p",
                                null,
                                this.state.info.description
                            ),
                            React.createElement(
                                "p",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "{this.state.info.reference}" },
                                    "\u4EA7\u54C1\u8BE6\u7EC6\u8BF4\u660E"
                                )
                            )
                        )
                    )
                )
            );
        }
    }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(props, state) {
            return { info: props.info };
        }
    }]);

    return MeasurementProductDetail;
}(React.Component);