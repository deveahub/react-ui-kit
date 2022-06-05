const { resolve } = require('path');

module.exports = {
  ...require('config/eslint-node-package-preset'),
  parserOptions: {
    project: resolve(__dirname, 'tsconfig.json'),
  }
};
