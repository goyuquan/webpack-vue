const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 8082,
        stats: {
            assets: true,
            chunks: false,
            modules: false,
        }
    },
    plugins: [

    ],
    mode: "development"
});
