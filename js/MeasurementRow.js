var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MeasurementRow = function (_React$Component) {
    _inherits(MeasurementRow, _React$Component);

    function MeasurementRow(props) {
        _classCallCheck(this, MeasurementRow);

        var _this = _possibleConstructorReturn(this, (MeasurementRow.__proto__ || Object.getPrototypeOf(MeasurementRow)).call(this, props));

        _this.info = props.info;
        _this.parentDivId = props.parentDivId;
        _this.state = { currentProductIndex: 0 };
        _this.updateParentHandler = _this.updateParentHandler.bind(_this);
        return _this;
    }

    _createClass(MeasurementRow, [{
        key: "updateParentHandler",
        value: function updateParentHandler(clickIndex) {
            this.setState({
                currentProductIndex: clickIndex
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { className: "measurement-row layers-all-layer" },
                React.createElement(
                    "div",
                    { className: "measurement-row-header" },
                    React.createElement(
                        "h3",
                        null,
                        info.title
                    ),
                    React.createElement(
                        "h5",
                        null,
                        info.subtitle
                    ),
                    React.createElement("i", { className: "fa fa-chevron-circle-right arrow-icon",
                        "data-toggle": "collapse", "data-target": "#measurement_row_" + info.id })
                ),
                React.createElement(
                    "div",
                    { className: "container collapse", id: "measurement_row_" + info.id, "data-parent": '#' + this.parentDivId },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "ul",
                            { className: "source-tabs col-md-3 col-sm-12 nav flex-column" },
                            this.info.productArray.map(function (obj, index) {
                                return React.createElement(MeasurementProductRow, {
                                    key: index,
                                    currentproductindex: _this2.state.currentProductIndex,
                                    index: index,
                                    info: obj,
                                    updateParent: _this2.updateParentHandler
                                });
                            })
                        ),
                        React.createElement(MeasurementProductDetail, { info: this.info.productArray[this.state.currentProductIndex] })
                    )
                )
            );
        }
    }]);

    return MeasurementRow;
}(React.Component);