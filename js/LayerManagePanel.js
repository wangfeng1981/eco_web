var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayerManagePanel = function (_React$Component) {
    _inherits(LayerManagePanel, _React$Component);

    function LayerManagePanel(props) {
        _classCallCheck(this, LayerManagePanel);

        //this.state = {info:props.info} ;

        var _this = _possibleConstructorReturn(this, (LayerManagePanel.__proto__ || Object.getPrototypeOf(LayerManagePanel)).call(this, props));

        _this.state = { connector: props.theconnector };

        //bind
        _this.layerListChangedCallback = _this.layerListChangedCallback.bind(_this);
        _this.state.connector.layerPanelCallback = _this.layerListChangedCallback;

        _this.onChildItemLayerRemoveClicked = _this.onChildItemLayerRemoveClicked.bind(_this);
        return _this;
    }

    _createClass(LayerManagePanel, [{
        key: "layerListChangedCallback",
        value: function layerListChangedCallback() {
            console.log("layer changed.");
            this.setState({ connector: this.state.connector });
        }
    }, {
        key: "onChildItemLayerRemoveClicked",
        value: function onChildItemLayerRemoveClicked(iteminfo) {
            this.state.connector.layerlist = this.state.connector.layerlist.filter(function (item) {
                return item.pid !== iteminfo.pid;
            });
            this.layerListChangedCallback();
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                { className: "scrollbar-hidden", "data-simplebar": "init", style: { maxHeight: '698px' } },
                React.createElement(
                    "div",
                    { className: "simplebar-track vertical", style: { visibility: 'hidden' } },
                    React.createElement("div", { className: "simplebar-scrollbar" })
                ),
                React.createElement(
                    "div",
                    { className: "simplebar-track horizontal", style: { visibility: 'hidden' } },
                    React.createElement("div", { className: "simplebar-scrollbar" })
                ),
                React.createElement(
                    "div",
                    { className: "simplebar-scroll-content", style: { paddingRight: '17px', marginBottom: '-34px' } },
                    React.createElement(
                        "div",
                        { className: "simplebar-content", style: { paddingBottom: '17px', marginRight: '-17px' } },
                        React.createElement(
                            "div",
                            { className: "layer-container sidebar-panel", style: { display: 'block' } },
                            React.createElement(
                                "div",
                                { className: "layer-group-case" },
                                React.createElement(
                                    "h3",
                                    { className: "head" },
                                    "\u8F85\u52A9\u53CA\u4E13\u9898\u4EA7\u54C1\u56FE\u5C42"
                                ),
                                React.createElement(
                                    "ul",
                                    { id: "sortableoverlays", className: "category" },
                                    this.state.connector.layerlist.map(function (obj, index) {
                                        return React.createElement(LayerPanelItem, { info: obj, key: index, onremove: _this2.onChildItemLayerRemoveClicked });
                                    })
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "layer-group-case" },
                                React.createElement(
                                    "h3",
                                    { className: "head" },
                                    "\u5E95\u56FE\u56FE\u5C42"
                                ),
                                React.createElement("ul", { id: "sortablebaselayers", className: "category" })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LayerManagePanel;
}(React.Component);