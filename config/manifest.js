'use strict';

module.exports = function (/* environment, appConfig */) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  return {
    name: 'pwa-app',
    short_name: 'pwa-app',
    description: '',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: 'https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691__340.png',
        sizes: '540x540',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691__340.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    ms: {
      tileColor: '#fff',
    },
  };
};
