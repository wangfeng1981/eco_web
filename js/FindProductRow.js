var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FindProductRow = function (_React$Component) {
    _inherits(FindProductRow, _React$Component);

    function FindProductRow(props) {
        _classCallCheck(this, FindProductRow);

        var _this = _possibleConstructorReturn(this, (FindProductRow.__proto__ || Object.getPrototypeOf(FindProductRow)).call(this, props));

        _this.info = props.info;
        _this.productPath = props.productPath;
        _this.rowid = props.rowid;
        _this.parentDivId = props.parentDivId;
        return _this;
    }

    _createClass(FindProductRow, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "layers-all-layer" },
                React.createElement(
                    "div",
                    { className: "layers-all-header has-checkbox" },
                    React.createElement(
                        "h3",
                        null,
                        this.info.name,
                        React.createElement("i", { className: "fa fa-info-circle", "data-toggle": "collapse", href: '#findproductrow_' + this.rowid })
                    ),
                    React.createElement(
                        "h5",
                        null,
                        this.productPath
                    )
                ),
                React.createElement(
                    "div",
                    { className: "source-metadata collapse", id: 'findproductrow_' + this.rowid,
                        "data-parent": '#' + this.parentDivId
                    },
                    React.createElement(
                        "p",
                        { className: "layer-date-range" },
                        "\u65F6\u95F4\u533A\u95F4:"
                    ),
                    React.createElement(
                        "div",
                        null,
                        React.createElement(
                            "p",
                            null,
                            this.info.description
                        ),
                        React.createElement(
                            "p",
                            null,
                            React.createElement(
                                "a",
                                { href: "{this.info.reference}" },
                                "\u4EA7\u54C1\u8BE6\u7EC6\u8BF4\u660E"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "metadata-more" },
                        React.createElement(
                            "span",
                            { className: "ellipsis up",
                                "data-toggle": "collapse", href: '#findproductrow_' + this.rowid },
                            "^"
                        )
                    )
                )
            );
        }
    }]);

    return FindProductRow;
}(React.Component);