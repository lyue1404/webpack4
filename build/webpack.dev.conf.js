const merge = require('webpack-merge');
const base = require('./webpack.base.conf.js');

module.exports = merge(base, {
    mode: 'development',
    devServer: {
        port: 3000,
        progress: true,
        contentBase: '../dist'
    }
})
