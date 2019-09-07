var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MeasurementProductRow = function (_React$Component) {
    _inherits(MeasurementProductRow, _React$Component);

    function MeasurementProductRow(props) {
        _classCallCheck(this, MeasurementProductRow);

        var _this = _possibleConstructorReturn(this, (MeasurementProductRow.__proto__ || Object.getPrototypeOf(MeasurementProductRow)).call(this, props));

        _this.info = props.info;
        _this.state = { currentproductindex: props.currentproductindex };
        _this.index = props.index;
        _this.clickHandler = _this.clickHandler.bind(_this);
        _this.updateParentHandler = props.updateParent;
        return _this;
    }

    _createClass(MeasurementProductRow, [{
        key: "clickHandler",
        value: function clickHandler() {
            this.updateParentHandler(this.index);
        }
    }, {
        key: "render",
        value: function render() {
            if (this.state.currentproductindex == this.index) {
                return React.createElement(
                    "li",
                    {
                        className: "active source-nav-item nav-item", onClick: this.clickHandler },
                    React.createElement(
                        "a",
                        { className: "nav-link" },
                        this.info.name
                    )
                );
            } else {
                return React.createElement(
                    "li",
                    {
                        className: "source-nav-item nav-item", onClick: this.clickHandler },
                    React.createElement(
                        "a",
                        { className: "nav-link" },
                        this.info.name
                    )
                );
            }
        }
    }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(props, state) {
            if (props.currentproductindex != state.currentproductindex) {
                return { currentproductindex: props.currentproductindex };
            } else {
                return null;
            }
        }
    }]);

    return MeasurementProductRow;
}(React.Component);