'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    prember: {
      urls: ['/'],
    },
    sassOptions: {
      includePaths: ['node_modules/bootstrap/scss'],
    },
  });
  app.import('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', {
    using: [
      {
        transformation: 'fastbootShim',
      },
    ],
  });
  return app.toTree();
};
