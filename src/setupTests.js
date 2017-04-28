/* @flow */
// If we're testing, use a local storage polyfill
global.localStorage = require('localStorage');
// Installed here to capture all API calls
require('fetch-mock');
