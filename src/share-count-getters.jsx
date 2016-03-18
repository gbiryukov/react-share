import jsonp from 'jsonp';
import platform from 'platform';

import { objectToGetParams, eventFactory } from './utils';


export function getFacebookShareCount(shareUrl, callback) {
  const fql = encodeURIComponent('select like_count, share_count from ' +
    `link_stat where url = '${encodeURIComponent(shareUrl)}'`);

  const endpoint = 'https://api.facebook.com/method/fql.query' +
    `?format=json&query=${fql}`;

  jsonp(endpoint, (err, data) => {
    if (!err) {
      callback(data.length && data[0].share_count
        ? data[0].share_count
        : undefined);
    }
  });
}

export function getGooglePlusShareCount(shareUrl, callback) {
  if (platform.name === 'IE' && parseInt(platform.version, 10) < 11) {
    /* eslint-disable no-console */
    console.error('Google plus share count is not supported in <=IE10!');
    /* eslint-enable no-console */
    return;
  }

  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://clients6.google.com/rpc');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

  xhr.send(JSON.stringify({
    method: 'pos.plusones.get',
    id: 'p',
    params: {
      nolog: true,
      id: shareUrl,
      source: 'widget',
      userId: '@viewer',
      groupId: '@self'
    },
    jsonrpc: '2.0',
    key: 'p',
    apiVersion: 'v1'
  }));

  xhr.onload = function onSuccessdata() {
    const data = JSON.parse(this.responseText);
    callback(!!data
      ? data.result.metadata.globalCounts.count
      : undefined);
  };

  xhr.onerror = function onErrordata() {};
}

export function getLinkedinShareCount(shareUrl, callback) {
  const url = 'https://www.linkedin.com/countserv/count/share';

  return jsonp(url + objectToGetParams({
    url: shareUrl,
    format: 'jsonp'
  }), (err, data) => {
    callback(!!data ? data.count : undefined);
  });
}

export function getPinterestShareCount(shareUrl, callback) {
  const url = 'https://api.pinterest.com/v1/urls/count.json';

  return jsonp(url + objectToGetParams({
    url: shareUrl
  }), (err, data) => {
    callback(!!data ? data.count : undefined);
  });
}


window.VK = {
  Share: Object.assign({
    count(_, count) {
      this.trigger('updateCount', count);
    }
  }, eventFactory())
};

export function getVkontakteShareCount(shareUrl, callback) {
  const url = '//vk.com/share.php';

  window.VK.Share.on('updateCount', count => {
    callback(!!count ? count : undefined);
  });

  return jsonp(url + objectToGetParams({
    url: shareUrl,
    act: 'count',
    index: 0
  }));
}


window.ODKL = Object.assign({
  updateCount(_, rowCount) {
    const count = parseInt(rowCount, 10);
    this.trigger('updateCount', count);
  }
}, eventFactory());

// console.log(window.ODKL === window.VK.Share._call);

export function getOdnoklassnikiShareCount(shareUrl, callback) {
  const url = '//connect.ok.ru/dk';

  window.ODKL.on('updateCount', count => {
    callback(!!count ? count : undefined);
  });

  return jsonp(url + objectToGetParams({
    ref: shareUrl,
    uid: 0,
    'st.cmd': 'extLike'
  }));
}

export function getMyMailShareCount(shareUrl, callback) {
  const url = '//connect.mail.ru/share_count';

  return jsonp(url + objectToGetParams({
    url_list: shareUrl,
    callback: 1
  }), {param: 'func'}, (err, data) => {
    let count = 0;
    const shareData = data[Object.keys(data)[0]];

    if (shareData) {
      count = shareData.shares;
    }

    callback(!!count ? count : undefined);
  });
}
