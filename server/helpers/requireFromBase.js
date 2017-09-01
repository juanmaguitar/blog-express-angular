const path = require('path')

function requireFromBase (moduleToLoad) {
  const basePath = '../'
  return require(path.join(__dirname, basePath, moduleToLoad))
}

module.exports = requireFromBase
