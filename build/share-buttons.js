/* eslint-disable react/no-multi-comp */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _socialMediaShareLinks = require('./social-media-share-links');

var _utils = require('./utils');

var SocialMediaShareButton = _react2['default'].createClass({
  displayName: 'SocialMediaShareButton',

  propTypes: {
    children: _react2['default'].PropTypes.node.isRequired,
    className: _react2['default'].PropTypes.string,
    link: _react2['default'].PropTypes.node.isRequired,
    url: _react2['default'].PropTypes.string.isRequired
  },

  onClick: function onClick() {
    (0, _utils.windowOpen)(this.props.link);
  },

  render: function render() {
    var className = 'SocialMediaShareButton ' + (this.props.className || '');

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, {
        className: className,
        onClick: this.onClick }),
      this.props.children
    );
  }
});

var FacebookShareButton = _react2['default'].createClass({
  displayName: 'FacebookShareButton',

  propTypes: {
    className: _react2['default'].PropTypes.string,
    children: _react2['default'].PropTypes.node.isRequired,
    title: _react2['default'].PropTypes.string.isRequired,
    url: _react2['default'].PropTypes.string.isRequired
  },

  render: function render() {
    var _props = this.props;
    var url = _props.url;
    var title = _props.title;

    return _react2['default'].createElement(SocialMediaShareButton, _extends({
      link: (0, _socialMediaShareLinks.facebook)(url, title)
    }, this.props, {
      className: 'SocialMediaShareButton--facebook' + (' ' + (this.props.className || '')) }));
  }
});

exports.FacebookShareButton = FacebookShareButton;
var TwitterShareButton = _react2['default'].createClass({
  displayName: 'TwitterShareButton',

  propTypes: {
    className: _react2['default'].PropTypes.string,
    children: _react2['default'].PropTypes.node.isRequired,
    title: _react2['default'].PropTypes.string.isRequired,
    url: _react2['default'].PropTypes.string.isRequired
  },

  render: function render() {
    var _props2 = this.props;
    var url = _props2.url;
    var title = _props2.title;

    return _react2['default'].createElement(SocialMediaShareButton, _extends({
      link: (0, _socialMediaShareLinks.twitter)(url, title)
    }, this.props, {
      className: 'SocialMediaShareButton--twitter' + (' ' + (this.props.className || '')) }));
  }
});

exports.TwitterShareButton = TwitterShareButton;
var GooglePlusShareButton = _react2['default'].createClass({
  displayName: 'GooglePlusShareButton',

  propTypes: {
    className: _react2['default'].PropTypes.string,
    children: _react2['default'].PropTypes.node.isRequired,
    url: _react2['default'].PropTypes.string.isRequired
  },

  render: function render() {
    var url = this.props.url;

    return _react2['default'].createElement(SocialMediaShareButton, _extends({
      link: (0, _socialMediaShareLinks.googlePlus)(url)
    }, this.props, {
      className: 'SocialMediaShareButton--google-plus' + (' ' + (this.props.className || '')) }));
  }
});

exports.GooglePlusShareButton = GooglePlusShareButton;
var LinkedinShareButton = _react2['default'].createClass({
  displayName: 'LinkedinShareButton',

  propTypes: {
    className: _react2['default'].PropTypes.string,
    children: _react2['default'].PropTypes.node.isRequired,
    title: _react2['default'].PropTypes.string.isRequired,
    url: _react2['default'].PropTypes.string.isRequired
  },

  render: function render() {
    var _props3 = this.props;
    var url = _props3.url;
    var title = _props3.title;

    return _react2['default'].createElement(SocialMediaShareButton, _extends({
      link: (0, _socialMediaShareLinks.linkedin)(url, title)
    }, this.props, {
      className: 'SocialMediaShareButton--linkedin' + (' ' + (this.props.className || '')) }));
  }
});

exports.LinkedinShareButton = LinkedinShareButton;
var PinterestShareButton = _react2['default'].createClass({
  displayName: 'PinterestShareButton',

  propTypes: {
    className: _react2['default'].PropTypes.string,
    children: _react2['default'].PropTypes.node.isRequired,
    media: _react2['default'].PropTypes.string.isRequired,
    url: _react2['default'].PropTypes.string.isRequired
  },

  render: function render() {
    var _props4 = this.props;
    var url = _props4.url;
    var media = _props4.media;

    return _react2['default'].createElement(SocialMediaShareButton, _extends({
      link: (0, _socialMediaShareLinks.pinterest)(url, media)
    }, this.props, {
      className: 'SocialMediaShareButton--pinterest' + (' ' + (this.props.className || '')) }));
  }
});

exports.PinterestShareButton = PinterestShareButton;
var VkontakteShareButton = _react2['default'].createClass({
  displayName: 'VkontakteShareButton',

  propTypes: {
    className: _react2['default'].PropTypes.string,
    children: _react2['default'].PropTypes.node.isRequired,
    title: _react2['default'].PropTypes.string.isRequired,
    url: _react2['default'].PropTypes.string.isRequired
  },

  render: function render() {
    var _props5 = this.props;
    var url = _props5.url;
    var title = _props5.title;

    return _react2['default'].createElement(SocialMediaShareButton, _extends({
      link: (0, _socialMediaShareLinks.vkontakte)(url, title)
    }, this.props, {
      className: 'SocialMediaShareButton--vkontakte' + (' ' + (this.props.className || '')) }));
  }
});

exports.VkontakteShareButton = VkontakteShareButton;
var OdnoklassnikiShareButton = _react2['default'].createClass({
  displayName: 'OdnoklassnikiShareButton',

  propTypes: {
    className: _react2['default'].PropTypes.string,
    children: _react2['default'].PropTypes.node.isRequired,
    title: _react2['default'].PropTypes.string.isRequired,
    url: _react2['default'].PropTypes.string.isRequired
  },

  render: function render() {
    var _props6 = this.props;
    var url = _props6.url;
    var title = _props6.title;

    return _react2['default'].createElement(SocialMediaShareButton, _extends({
      link: (0, _socialMediaShareLinks.odnoklassniki)(url, title)
    }, this.props, {
      className: 'SocialMediaShareButton--odnoklassniki' + (' ' + (this.props.className || '')) }));
  }
});

exports.OdnoklassnikiShareButton = OdnoklassnikiShareButton;
var MyMailShareButton = _react2['default'].createClass({
  displayName: 'MyMailShareButton',

  propTypes: {
    className: _react2['default'].PropTypes.string,
    children: _react2['default'].PropTypes.node.isRequired,
    title: _react2['default'].PropTypes.string.isRequired,
    url: _react2['default'].PropTypes.string.isRequired
  },

  render: function render() {
    var _props7 = this.props;
    var url = _props7.url;
    var title = _props7.title;

    return _react2['default'].createElement(SocialMediaShareButton, _extends({
      link: (0, _socialMediaShareLinks.myMail)(url, title)
    }, this.props, {
      className: 'SocialMediaShareButton--mymail' + (' ' + (this.props.className || '')) }));
  }
});
exports.MyMailShareButton = MyMailShareButton;