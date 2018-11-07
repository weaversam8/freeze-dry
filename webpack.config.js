const path = require('path');
const webpack = require('webpack');

const packageConfig = require("./package.json");

module.exports = {
    entry: './window.js',
    output: {
        filename: 'freeze-dry-' + packageConfig.version + '.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         'window.FreezeDry': 'freeze-dry'
    //     })
    // ]
};
