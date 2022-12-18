/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function () {
  return {
    clientAllowedKeys: ['API_MAPS'],
    fastbootAllowedKeys: [],
    failOnMissingKey: false,
    path: path.join(path.dirname(__dirname), '.env'),
  };
};
