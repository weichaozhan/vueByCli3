const path = require('path')

// module.exports = {
//   chainWebpack: config => {
//     const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
//     types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
//   },
// }

// function addStyleResource (rule) {
//   rule.use('style-resources-loader')
//     .loader('style-resources-loader')
//     .options({
//       patterns: [
//         path.resolve(__dirname, './src/styles/scaffold.less'),
//       ],
//     })
// }

module.exports = {
  devServer: {
    port: 3001
  },
  // css: {
  //   loaderOptions: {
  //     less: {
  //       data: `@import "@/styles/abstracts/scaffold.less"`
  //     }
  //   }
  // }
  // chainWebpack: config => {
  //   config.module
  //     .rule('less')
  //     .test(/\.less$/)
  //     .use('style-resources')
  //     .loader('style-resources-loader')
  //     .options({
  //       patterns: path.resolve(__dirname, './src/styles/scaffold.less')
  //     })
  // },
  pluginOptions: {
    'style-resources-loader': {
      'patterns': [
        path.resolve(__dirname, './src/styles/scaffold.less'),
      ]
    }
  }
}