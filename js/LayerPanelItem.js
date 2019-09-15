var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayerPanelItem = function (_React$Component) {
    _inherits(LayerPanelItem, _React$Component);

    function LayerPanelItem(props) {
        _classCallCheck(this, LayerPanelItem);

        var _this = _possibleConstructorReturn(this, (LayerPanelItem.__proto__ || Object.getPrototypeOf(LayerPanelItem)).call(this, props));

        _this.state = { info: props.info };

        _this.onRemoveClick = _this.onRemoveClick.bind(_this);

        _this.onremove = props.onremove;
        return _this;
    }

    _createClass(LayerPanelItem, [{
        key: "onRemoveClick",
        value: function onRemoveClick() {
            this.onremove(this.state.info);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "li",
                { className: "item productsitem" },
                React.createElement(
                    "a",
                    { className: "hdanchor hide hideReg bank-item-img layer-hidden", title: "\u663E\u793A/\u9690\u85CF\u56FE\u5C42" },
                    React.createElement("i", { className: "far fa-eye-slash layer-eye-icon" })
                ),
                React.createElement(
                    "div",
                    { className: "zot" },
                    React.createElement(
                        "b",
                        null,
                        "!"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "layer-main" },
                    React.createElement(
                        "a",
                        { title: "\u79FB\u9664\u56FE\u5C42", className: "button wv-layers-close", onClick: this.onRemoveClick },
                        React.createElement("i", { className: "fa fa-times" })
                    ),
                    React.createElement(
                        "a",
                        { title: "\u56FE\u5C42\u9009\u9879", className: "wv-layers-options" },
                        React.createElement("i", { className: "fas fa-sliders-h wv-layers-options-icon" })
                    ),
                    React.createElement(
                        "a",
                        { title: "\u4EA7\u54C1\u63CF\u8FF0\u4FE1\u606F", className: "wv-layers-info" },
                        React.createElement("i", { className: "fa fa-info wv-layers-info-icon" })
                    ),
                    React.createElement(
                        "h4",
                        null,
                        this.state.info.name
                    ),
                    React.createElement(
                        "p",
                        null,
                        this.state.info.longname
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

    return LayerPanelItem;
}(React.Component);