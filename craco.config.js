/* craco.config.js */
const path = require(`path`);

module.exports = {
    jest: {
        configure: {
          moduleNameMapper: {
            "^@components(.*)$": "<rootDir>/src/components$1",
            "^@src(.*)$": "<rootDir>/src$1",
            "^@utils(.*)$": "<rootDir>/src/utils$1",
            "^@features(.*)$": "<rootDir>/src/features$1"
          },
        },
      },
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@features': path.resolve(__dirname, 'src/features'),
            '@utils': path.resolve(__dirname, 'src/utils'),
        },
    },
};
