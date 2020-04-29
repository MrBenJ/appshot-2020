const path = require('path');

module.exports = {
  webpack: config => {
    config.resolve.alias = Object.assign(
      config.resolve.alias || {},
      {
        '@src': path.resolve(__dirname, './src'),
        '@layout': path.resolve(__dirname, './src/layout'),
        '@components': path.resolve(__dirname, './src/components')
      }
    );

    return config;
  }
}