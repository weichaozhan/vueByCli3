// export const BASE_URL = 'http://localhost:9091';
export const BASE_URL = 'http://192.168.1.180/819_operation';

export const MENU_LIST = [
    {
        id: 1,
        name: '单项',
        icon: 'el-icon-location',
        component: 'ABC',
    },
    {
        id: 2,
        name: '系统管理',
        icon: 'el-icon-printer',
        children: [
            {
                id: 3,
                name: '二级目录一',
                icon: 'el-icon-news',
                component: 'BGJ',
            },
            {
                id: 4,
                name: '二级目录二',
                icon: 'el-icon-bell',
                children: [
                    {
                        id: 5,
                        name: '三级目录',
                        icon: 'el-icon-setting',
                        component: 'LKO'
                    },
                ],
            },
        ],
    },
];