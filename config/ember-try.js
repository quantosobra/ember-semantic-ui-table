'use strict';

const getChannelURL = require('ember-source-channel-url');

module.exports = function() {
  return Promise.all([
    getChannelURL('release'),
    getChannelURL('beta'),
    getChannelURL('canary')
  ]).then((urls) => {
    return {
      useYarn: true,
      scenarios: [
        {
          name: 'ember-lts-2.18',
          npm: {
            devDependencies: {
              'ember-source': '~2.18.0'
            }
          }
        },
        {
          name: 'ember-lts-3.8',
          npm: {
            devDependencies: {
              'ember-source': '~3.8.0'
            }
          }
        },
        {
          name: 'ember-lts-3.12',
          npm: {
            devDependencies: {
              'ember-source': '~3.12.0'
            }
          }
        },
        {
          name: 'ember-release',
          npm: {
            devDependencies: {
              'ember-source': urls[0]
            }
          }
        },
        {
          name: 'ember-beta',
          npm: {
            devDependencies: {
              'ember-source': urls[1]
            }
          }
        },
        {
          name: 'ember-canary',
          npm: {
            devDependencies: {
              'ember-source': urls[2]
            }
          }
        },
        {
          name: 'embroider',
          npm: {
            devDependencies: {
              '@embroider/core': '*',
              '@embroider/webpack': '*',
              '@embroider/compat': '*',
            },
          },
        },
      ],
    };
  });
};
