const path = require('path');

module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            '@': path.resolve(__dirname, 'src/app'),
            '@styles': path.resolve(__dirname, 'src/styles'),
        },
    };

    return config;
};
