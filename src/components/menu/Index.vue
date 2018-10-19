<!-- 菜单入口 -->
<template>
    <el-menu @select="handleSelectMenu" :default-active="itemActiveIndex">
        <nav-item :key="index" v-for="(item, index) in menuList" :menuItem="item" :menuIndex="index + ''"></nav-item>
    </el-menu>
</template>

<script>
import NavItem from'./NavItem';

import { mapState } from 'vuex'

import { MENU_LIST } from '@/public/constant';

export default {
    name:'NavMenu',
    data() {
        return {
            menuList: MENU_LIST,
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
                console.log(index)
                this.$store.commit('menu/changeActiveItem', index);
            }
        },
    },
}
</script>

<style scoped lang="less">
</style>