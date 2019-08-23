let babel = require('./babel.config.js');
let config = require('./../.config/webpack/base.js')({
    babel,
    preprocessor: {
        variables: {
            mode: 'eager'
        }
    }
});

config.externals = {};

module.exports = config;