const Mock = require('mockjs');

module.exports = function (router, koaBody) {

    router.post('/channel/extension', koaBody(), async (ctx, next) => {
        const data = Mock.mock({
            "code": 1000000,
            "msg": "success",
            "data": {
                status: 'request'
            },
        });
        ctx.body = data;
        await next();
    });

    // 菜单权限
    router.get('/account/authList', koaBody(), async (ctx, next) => {
        const data = Mock.mock({
            "code": 1000,
            "msg": "ok",
            "time": "2018-10-17 10:04:10",
            "data": [
                {
                    "moduleName": "用户管理",
                    "subModuleName": "用户管理1",
                },
                {
                    "moduleName": "用户管理",
                    "subModuleName": "用户管理2",
                }
            ],
        });
        ctx.body = data;
        await next();
    });

    router.get('/home/getPeopleCount', koaBody(), async (ctx, next) => {
        const data = Mock.mock({
            "code": 1000,
            "msg": "ok",
            "time": "2018-10-17 10:04:10",
            "data": {"doctorNum": 27, "patientNum": 31, "inquisitionNum": 141},
        });
        ctx.body = data;
        await next();
    });
}