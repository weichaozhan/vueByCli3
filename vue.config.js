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
            runtimeChunk: 'single',
            splitChunks: {
                name: true,
                chunks: 'all',
                minSize: 10000,
                maxInitialRequests: 6, // 首页最大并行下载数
                cacheGroups: {
                    vueBase: {
                        test: (module) => {
                            return /vue/.test(module.context);
                        },
                        name: 'vue',
                        priority: 3,
                        reuseExistingChunk: true,
                    },
                    zrender: {
                        test: (module) => {
                            return /zrender/.test(module.context);
                        },
                        name: 'zrender',
                        priority: 3,
                        reuseExistingChunk: true,
                    },
                    base: {
                        test: (module) => {
                            return /core-js|async-validator/.test(module.context);
                        },
                        name: 'base',
                        priority: 3,
                        reuseExistingChunk: true,
                    },
                    elementui: {
                        test: (module) => {
                            return /element-ui/.test(module.context);
                        },
                        name: 'elementui',
                        priority: 3,
                        reuseExistingChunk: true,
                    },
                    echarts: {
                        test: (module) => {
                            return /echarts/.test(module.context);
                        },
                        name: 'echarts',
                        priority: 3,
                        reuseExistingChunk: true,
                    },
                    axios: {
                        test: (module) => {
                            return /axios/.test(module.context);
                        },
                        name: 'axios',
                        priority: 2,
                        reuseExistingChunk: true,
                    },
                    moment: {
                        test: (module) => {
                            return /moment/.test(module.context);
                        },
                        name: 'moment',
                        priority: 2,
                        reuseExistingChunk: true,
                    },
                    // commons: {
                    //     name: 'commons',
                    //     minChunks: 2,
                    //     priority: 0,
                    // },
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