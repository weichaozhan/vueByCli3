module.exports = function (router, koaBody) {

  router.post('/channel/extension', koaBody(), async (ctx, next) => {
    const Mock = require('mockjs')
    const data = Mock.mock({
      "code": 1000000,
      "msg": "success",
      "data": {
        status: 'request'
      }
    })
    ctx.body = data
    await next()
  })
}