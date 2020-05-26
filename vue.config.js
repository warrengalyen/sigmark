const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: isProd ? '/sigmark/' : '/',
  productionSourceMap: false,
  chainWebpack: config => {
    config.module.rules.delete('eslint');
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  }
}
