<!-- 菜单入口 -->
<template>
    <el-menu @select="handleSelectMenu" :default-active="itemActiveIndex" :active-text-color="itemActiveIndex ? '#409EFF' : '#303133'">
        <nav-item :key="index" v-for="(item, index) in menuList" :menuItem="item" :menuIndex="index + ''"></nav-item>
    </el-menu>
</template>

<script>
import { mapState } from 'vuex'

import NavItem from'./NavItem';

import {
    getAuthListAPI,
} from '@/api/globalAPI.js';
import { MENU_LIST } from '@/public/constant';

export default {
    name:'NavMenu',
    data() {
        return {
            menuList: [],
        };
    },
    components: {
        NavItem,
    },
    computed: {
        ...mapState('menu', {
            itemActiveIndex: state => state.itemActiveIndex,
        })
    },
    methods: {
        /**
         * 菜单点击选择事件
         */
        handleSelectMenu(index) {
            if (index !== this.itemActiveIndex) {
                this.$store.commit('menu/changeActiveItem', index);
            }
        },
        /**
         * 构建对应权限菜单
         */
        buildAuthNav() {
            getAuthListAPI()
                .then(res => {
                    let authList = res.data.data.map(item => item.subModuleName);

                    function buildNewMenu(arrayDone) {
                        let newArray = [];

                        arrayDone.forEach((item, index) => {
                            if (item.children && item.children.length > 0) {
                                let newChildren = buildNewMenu(item.children);

                                if (newChildren.length > 0) {
                                    newArray.push(Object.assign({}, item, {
                                        children: buildNewMenu(item.children),
                                    }));
                                }
                            } else {
                                if (authList.indexOf(item.name) > -1) {
                                    newArray.push(item);
                                }
                            }
                        });

                        return newArray;
                    }

                    let newMenu = buildNewMenu(MENU_LIST);

                    this.menuList = newMenu;
                })
        },
    },
    created() {
        this.buildAuthNav();
    },
}
</script>

<style scoped lang="less">
</style>