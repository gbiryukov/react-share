'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.objectToGetParams = objectToGetParams;
exports.windowOpen = windowOpen;
exports.eventFactory = eventFactory;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _platform = require('platform');

var _platform2 = _interopRequireDefault(_platform);

function objectToGetParams(object) {
  return '?' + Object.keys(object).filter(function (key) {
    return !!object[key];
  }).map(function (key) {
    return key + '=' + encodeURIComponent(object[key]);
  }).join('&');
}

function windowOpen(url, name) {
  var height = arguments.length <= 2 || arguments[2] === undefined ? 400 : arguments[2];
  var width = arguments.length <= 3 || arguments[3] === undefined ? 550 : arguments[3];

  var left = window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2;
  var top = window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2;

  var config = {
    height: height,
    width: width,
    left: left,
    top: top,
    location: 'no',
    toolbar: 'no',
    status: 'no',
    directories: 'no',
    menubar: 'no',
    scrollbars: 'yes',
    resizable: 'no',
    centerscreen: 'yes',
    chrome: 'yes'
  };

  return window.open(url, _platform2['default'].name === 'IE' && parseInt(_platform2['default'].version, 10) < 10 ? '' : name, Object.keys(config).map(function (key) {
    return key + '=' + config[key];
  }).join(', '));
}

function eventFactory() {
  return {
    _callbacks: {},
    on: function on(eventName, callback) {
      var _this = this;

      if (typeof callback === 'function') {
        if (!this._callbacks.hasOwnProperty(eventName)) {
          this._callbacks[eventName] = [];
        }

        this._callbacks[eventName].push(callback);

        return function () {
          _this.off(eventName, callback);
        };
      }
    },
    off: function off(eventName, callback) {
      if (typeof callback === 'function') {
        if (this._callbacks.hasOwnProperty(eventName)) {
          this._callbacks[eventName] = this._callbacks[eventName].filter(function (cb) {
            return cb !== callback;
          });
        }
      }
    },
    trigger: function trigger(eventName, eventData, context) {
      var _this2 = this;

      if (this._callbacks.hasOwnProperty(eventName)) {
        this._callbacks[eventName].forEach(function (cb) {
          return cb.call(context ? context : _this2, eventData);
        });
      }
    }
  };
}