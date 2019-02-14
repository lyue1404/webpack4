const merge = require('webpack-merge');
const base = require('./webpack.config.js');

merge(base, {
    devServer: {
        port: 3000
    }
})