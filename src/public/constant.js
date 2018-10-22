// export const BASE_URL = 'http://localhost:9091';
export const BASE_URL = 'http://192.168.1.180/819_operation';

// 定义 APP 内容组件名称
export const APP_COMPONENTS = {
    // 首页
    HomePage: () => import('../components/homePage/Index.vue'),
    // 404 页面
    NotFound: () => import('../components/NotFound.vue'),
};

// 菜单列表
export const MENU_LIST = [
    {
        id: 1,
        name: '用户管理',
        icon: 'el-icon-location',
        children: [
            {
                id: 2,
                name: '医生用户管理',
                icon: 'el-icon-news',
            },
            {
                id: 3,
                name: '患者用户管理',
                icon: 'el-icon-news',
            },
        ],
    }
];