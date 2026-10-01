const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')

const smp = new SpeedMeasurePlugin()

module.exports = function override(config, env) {
  return smp.wrap(config)
}
