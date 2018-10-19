const path = require('path');

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
        port: 3001
    },
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    },
};