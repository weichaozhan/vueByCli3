const path = require('path');
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'

function addStyleResource(rule) {
    rule
        .use('style-resources-loader')
        .loader('style-resources-loader')
        .options({
            patterns: [path.resolve(__dirname, './src/styles/**/*.less')],
        });
}

module.exports = {
    devServer: {
        port: 3002
    },
    productionSourceMap: false, // 生产不生成 sourcemap
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    },
    // gzip 压缩
    configureWebpack: config => {
        // 依赖代码分离，避免 vendor 过大
        config.optimization = {
            splitChunks: {
                name: true,
                chunks: 'all',
                cacheGroups: {
                    vue: {
                        test: (module) => {
                            return /vue/.test(module.context);
                        },
                        name: 'vue',
                    },
                    elementui: {
                        test: (module) => {
                            return /element-ui/.test(module.context);
                        },
                        name: 'elementui',
                    },
                    moment: {
                        test: (module) => {
                            return /moment/.test(module.context);
                        },
                        name: 'moment',
                    },
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        priority: -1,
                        // reuseExistingChunk: true,
                    },
                },
            }
        }
        if (isProduction) {
            config.plugins.push(new CompressionWebpackPlugin({
                algorithm: 'gzip',
                test: new RegExp('\\.js$'),
                threshold: 160,
                minRatio: 0.8
            }))
        }
    }
};