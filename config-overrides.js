const isDevEnv = process.env.NODE_ENV !== 'production';
const rewireStyledComponents = require('react-app-rewire-styled-components');

/* config-overrides.js */
module.exports = function override(config, env) {
    config = rewireStyledComponents(config, env, {
        minify: !isDevEnv,
        displayName: isDevEnv
    });
    return config;
};