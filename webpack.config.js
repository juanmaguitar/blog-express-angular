global.__webpackBase = __dirname

const commonConfig = require('./build-utils/webpack.common')
const webpackMerge = require('webpack-merge')

const addons = addonsArg => {
  console.log(addonsArg)
  const addons = [].concat([], [addonsArg]).filter(Boolean)
  console.log(addons)
  const getWebpackConfigPlugin = addonName => require(`./build-utils/plugins/webpack.${addonName}.js`)
  return addons.map(getWebpackConfigPlugin)
}

module.exports = env => {
  if (!env) {
    throw new Error('You must pass an --env.env flag into your build for webpack to work!')
  }
  const envConfig = require(`./build-utils/environments/webpack.${env.env}.js`)
  const targetConfig = require(`./build-utils/targets/webpack.${env.target}.js`)
  const mergedConfig = webpackMerge(commonConfig, targetConfig, envConfig, ...addons(env.addons))

  console.log(JSON.stringify(mergedConfig, null, 2))
  return mergedConfig
}
