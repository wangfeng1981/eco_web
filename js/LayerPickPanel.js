var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LayerPickPanel = function (_React$Component) {
    _inherits(LayerPickPanel, _React$Component);

    function LayerPickPanel(props) {
        _classCallCheck(this, LayerPickPanel);

        var _this = _possibleConstructorReturn(this, (LayerPickPanel.__proto__ || Object.getPrototypeOf(LayerPickPanel)).call(this, props));

        _this.state = { info: props.info, searchtext: "" };
        _this.onSearchInputTextChanged = _this.onSearchInputTextChanged.bind(_this);

        _this.customForceUpdate = _this.customForceUpdate.bind(_this);

        _this.connector = props.theconnector;

        return _this;
    }

    _createClass(LayerPickPanel, [{
        key: 'onSearchInputTextChanged',
        value: function onSearchInputTextChanged(event) {
            console.log('text change');
            this.setState({ searchtext: event.target.value });
        }
    }, {
        key: 'customForceUpdate',
        value: function customForceUpdate() {

            this.setState({ info: this.state.info, searchtext: '' });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var rows = [];
            if (this.state.searchtext == "") {
                for (var index in this.state.info.productGroupArray) {
                    rows.push(React.createElement(MeasurementRow, {
                        key: index,
                        info: this.state.info.productGroupArray[index],
                        parentDivId: 'productGroupsParent', connector: this.connector }));
                }
            } else {
                var tempindex = 0;
                var searchtext = this.state.searchtext.trim();
                var searchWordArray = searchtext.split(" ", 10);
                for (var igroup in this.state.info.productGroupArray) {
                    var groupObj = this.state.info.productGroupArray[igroup];

                    var _loop = function _loop(ipdt) {
                        var pdtOne = groupObj.productArray[ipdt];
                        var hasKeyword = true;
                        searchWordArray.forEach(function (wordOne) {
                            if (hasKeyword == true && pdtOne.name.indexOf(wordOne) == -1) {
                                //contains keyword
                                hasKeyword = false;
                            }
                        });
                        if (hasKeyword == true) {
                            rows.push(React.createElement(FindProductRow, {
                                key: tempindex,
                                info: pdtOne,
                                productPath: groupObj.title + '/' + pdtOne.name,
                                parentDivId: 'productGroupsParent',
                                rowid: tempindex,
                                connector: _this2.connector
                            }));
                            tempindex++;
                        }
                    };

                    for (var ipdt in groupObj.productArray) {
                        _loop(ipdt);
                    }
                }
            }

            return React.createElement(
                'div',
                { className: 'modal fade', id: 'modalAddLayer', tabIndex: '-1',
                    role: 'dialog',
                    'aria-labelledby': 'modalAddLayerTitle', 'aria-hidden': 'true' },
                React.createElement(
                    'div',
                    { id: 'layer_picker_component', className: 'modal-dialog custom-layer-dialog light', role: 'document' },
                    React.createElement(
                        'div',
                        { className: 'modal-content' },
                        React.createElement(
                            'div',
                            { className: 'modal-header' },
                            React.createElement(
                                'h5',
                                { className: 'modal-title' },
                                React.createElement(
                                    'div',
                                    { id: 'layer-search', className: 'layer-search input-group' },
                                    React.createElement('input', { id: 'layers-search-input', placeholder: '\u641C\u7D22', type: 'search', className: 'form-control', onChange: this.onSearchInputTextChanged, value: this.state.searchtext })
                                )
                            ),
                            React.createElement(
                                'button',
                                { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
                                React.createElement(
                                    'span',
                                    { 'aria-hidden': 'true' },
                                    '\xD7'
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'modal-body' },
                            React.createElement(
                                'div',
                                { id: 'layer-modal-content', className: 'layer-modal-content' },
                                React.createElement(
                                    'div',
                                    { className: 'scrollbar-visible', 'data-simplebar': 'init', style: { maxHeight: '504px' } },
                                    React.createElement(
                                        'div',
                                        { className: 'simplebar-track vertical', style: { visibility: 'visible' } },
                                        React.createElement('div', { className: 'simplebar-scrollbar', style: ({ height: '172px' }, { transform: 'translate3d(0px, 0px, 0px)' }) })
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'simplebar-track horizontal', style: { visibility: 'hidden' } },
                                        React.createElement('div', { className: 'simplebar-scrollbar' })
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'simplebar-scroll-content', style: ({ paddingRight: '17px' }, { marginBottom: '-34px' }) },
                                        React.createElement(
                                            'div',
                                            { className: 'simplebar-content', style: ({ paddingBottom: '17px' }, { marginRight: '-17px' }) },
                                            React.createElement(
                                                'div',
                                                { className: 'product-outter-list-case' },
                                                React.createElement(
                                                    'div',
                                                    { className: 'layer-picker-list-case layers-all', id: 'productGroupsParent' },
                                                    React.createElement(
                                                        'div',
                                                        { id: 'legacy-all-list' },
                                                        rows
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LayerPickPanel;
}(React.Component);