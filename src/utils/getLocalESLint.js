const path = require('path');
const findUp = require('find-up');

const getLocalESLint = config => {
  const nodeModulesPath = config.globals.JEST_RUNNER_ESLINT_OVERRIDE_NODE_MODULES_PATH || findUp.sync('node_modules', { cwd: config.rootDir });
  // eslint-disable-next-line import/no-dynamic-require, global-require
  return require(path.resolve(nodeModulesPath, 'eslint'));
};

module.exports = getLocalESLint;
