const path = require('path')

function requireFrom (basePath) {
  return function (moduleToLoad) {
    const modulePath = path.join(basePath, moduleToLoad)
    console.log(`loading ${modulePath}`)
    return require(modulePath)
  }
}

module.exports = requireFrom
