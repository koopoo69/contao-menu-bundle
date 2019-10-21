var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('src/Resources/public/')
    .addEntry('contao-menu-bundle', './src/Resources/assets/js/contao-menu-bundle.js')
    .setPublicPath('/public/')
    .disableSingleRuntimeChunk()
    .addExternals({
        '@hundh/contao-utils-bundle': 'utilsBundle'
    })
    .configureBabel(function (babelConfig) {
    }, {
        // include to babel processing
        includeNodeModules: ['@hundh/contao-menu-bundle']
    })
    .enableSourceMaps(!Encore.isProduction())
    .enableSassLoader()
;

module.exports = Encore.getWebpackConfig();