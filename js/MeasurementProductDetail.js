var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MeasurementProductDetail = function (_React$Component) {
    _inherits(MeasurementProductDetail, _React$Component);

    function MeasurementProductDetail(props) {
        _classCallCheck(this, MeasurementProductDetail);

        var _this = _possibleConstructorReturn(this, (MeasurementProductDetail.__proto__ || Object.getPrototypeOf(MeasurementProductDetail)).call(this, props));

        _this.connector = props.connector;

        var tempcheckstr = '';
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = props.connector.layerlist[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var obj = _step.value;

                if (obj.pid == props.info.pid) {
                    tempcheckstr = 'checked';
                    break;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        _this.state = { info: props.info, checkstr: tempcheckstr };

        _this.checkedHandler = _this.checkedHandler.bind(_this);
        return _this;
    }

    _createClass(MeasurementProductDetail, [{
        key: 'checkedHandler',
        value: function checkedHandler(event) {
            var _this2 = this;

            if (this.state.checkstr == 'checked') {
                this.setState({ checkstr: '' });
                this.connector.layerlist = this.connector.layerlist.filter(function (item) {
                    return item.pid !== _this2.state.info.pid;
                });
                this.connector.layerPanelCallback();
            } else {
                this.setState({ checkstr: 'checked' });
                this.connector.layerlist.push(this.state.info);
                this.connector.layerPanelCallback();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            console.log(this.state.checkstr);
            return React.createElement(
                'div',
                { className: 'tab-content col-md-9 col-sm-12' },
                React.createElement(
                    'div',
                    { className: 'tab-pane active' },
                    React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'div',
                            { className: "wv-checkbox " + this.state.checkstr },
                            React.createElement('input', { type: 'checkbox', className: 'settings-check', onChange: this.checkedHandler }),
                            React.createElement(
                                'label',
                                null,
                                this.state.info.name
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        null,
                        React.createElement(
                            'div',
                            { className: 'source-metadata overflow' },
                            React.createElement(
                                'h3',
                                null,
                                this.state.info.longname
                            ),
                            React.createElement(
                                'p',
                                null,
                                this.state.info.description
                            ),
                            React.createElement(
                                'p',
                                null,
                                React.createElement(
                                    'a',
                                    { href: '{this.state.info.reference}' },
                                    '\u4EA7\u54C1\u8BE6\u7EC6\u8BF4\u660E'
                                )
                            )
                        )
                    )
                )
            );
        }
    }], [{
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(props, state) {
            var tempcheckstr = '';
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = props.connector.layerlist[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var obj = _step2.value;

                    if (obj.pid == props.info.pid) {
                        tempcheckstr = 'checked';
                        break;
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return { info: props.info, checkstr: tempcheckstr };
        }
    }]);

    return MeasurementProductDetail;
}(React.Component);