const Mock = require('mockjs');
const createCaptcha = require('../utils/captcha');

module.exports = function (router, koaBody) {
    // 登陆
    router.post('/users/login', koaBody(), async (ctx, next) => {
        const data = Mock.mock({
            "code": 1000,
            "msg": "ok",
            "time": "2018-10-17 10:04:10",
            "data": {
                "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOjEsInJpZCI6MSwiZXhwIjoxNTQwMDAxM" +
                        "DUwfQ.HvgH0kwy6feQoen0gvedThCI9sT7TgXZnMVAAiqGfjM",
                "rid": 1,
            },
        });
        ctx.body = data;
        await next();
    });
    // 验证码
    router.get('/captcha', koaBody(), async (ctx, next) => {
        ctx
            .response
            .set('content-type', 'image/png');
        ctx.body = createCaptcha();

        await next();
    });
};