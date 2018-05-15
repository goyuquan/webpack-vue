const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const proxy = {
  "/api": {
    target: "http://localhost:3000",
    pathRewrite: {"^/api" : ""}
  },
  "/v2": {
    target: "https://api.douban.com/",
    changeOrigin: true
  }
};

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 8082,
        proxy,
        stats: {
            assets: true,
            chunks: false,
            modules: false,
        }
    },
    plugins: [

    ],
    mode: "development",
});
