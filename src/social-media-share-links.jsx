import { objectToGetParams } from './utils';


function assertProvided(argument, caller) {
  if (!argument) {
    throw new Error(`Argument not provided for ${caller}.`);
  }
}

function assertIsArray(array, caller) {
  if (!!array && typeof array.contructor === Array) {
    throw new Error(`Expected object to be an array in ${caller}.`);
  }
}

export function email(subject, body) {
  assertProvided(subject, 'email');
  assertProvided(body, 'email');

  return `mailto:` + objectToGetParams({subject, body});
}

export function twitter(url, text, via, hashtags = []) {
  assertProvided(url, 'twitter');
  assertProvided(text, 'twitter');
  assertIsArray(hashtags, 'twitter');

  return `https://twitter.com/share` + objectToGetParams({
    url,
    text,
    via,
    hashtags: hashtags.join(',')
  });
}

export function facebook(url) {
  assertProvided(url, 'facebook');

  return `https://facebook.com/sharer.php` + objectToGetParams({u: url});
}

export function googlePlus(url) {
  assertProvided(url, 'googlePlus');

  return `https://plus.google.com/share` + objectToGetParams({url});
}

export function linkedin(url, title) {
  assertProvided(url, 'linkedin');
  assertProvided(title, 'linkedin');

  return `https://linkedin.com/shareArticle` + objectToGetParams({url, title});
}

export function pinterest(url, media) {
  assertProvided(url, 'pinterest');
  assertProvided(media, 'pinterest');

  return `https://pinterest.com/pin/create/button/` + objectToGetParams({
    url,
    media
  });
}

export function vkontakte(url) {
  assertProvided(url, 'vkontakte');

  return `http://vk.com/share.php` + objectToGetParams({url});
}

export function odnoklassniki(url) {
  assertProvided(url, 'odnoklassniki');
  const params = {
    'st._surl': url,
    'st.cmd': 'addShare',
    'st.s': 1
  };

  return `http://www.odnoklassniki.ru/dk` + objectToGetParams(params);
}
