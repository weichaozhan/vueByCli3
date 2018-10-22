# 说明

## 安装依赖

安装 npm 淘宝镜像

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
```
cnpm install
```

### 本地开发服务
```
npm run serve
```

### 编译生产
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### 项目目录

```
+ mockServer // mock 服务
+ src
    + api // 接口目录
        - globalAPI.js // 全局接口
        - homeAPI.js // 首页接口
    
    + assets // 资源目录
        + images // 图片
    
    + components // 组件目录
        + appHeader // APP 顶部 bar 条
        + homePage // 首页
        + mainContent // 内容区域容器
        + menu // 菜单
        - Index.vue // 系统内容入口
        - LoginPage.vue // 登陆页
        - NotFound.vue // 404 页面
        ...
        ...
        ...
    + public // 公用 js
        - constant.js // 常量
        - http.js // axios 封装
    + router // 路由
    + store // vuex 状态管理
    + stykes // 公用样式
    ...
    ...
    ...
```