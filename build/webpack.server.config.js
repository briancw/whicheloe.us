const base = require('./webpack.base.config')

const webpack = require('webpack')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')

const isProduction = process.env.NODE_ENV === 'production'

const config = Object.assign({}, base, {
    target: 'node',
    entry: './client/entry_server.js',
    // TODO research why this is done this way
    output: Object.assign({}, base.output, {
        libraryTarget: 'commonjs2',
    }),
    externals: [
        ...Object.keys(require('../package.json').dependencies),
    ],
    plugins: (base.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.VUE_ENV': '"server"',
        }),
        new VueSSRServerPlugin(),
        new WebpackBuildNotifierPlugin({
            title: 'Webpack Server Build',
            suppressSuccess: true,
        }),
    ]),
})

module.exports = config
