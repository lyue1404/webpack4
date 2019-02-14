const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[hash:8].js',
        path: path.resolve(__dirname, 'dist')
    }
}