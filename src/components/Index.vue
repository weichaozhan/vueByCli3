<!-- 系统内容入口 -->
<template>
    <div>
        <app-header></app-header>
        <div class="main-container">
            <nav-menu class="nav"></nav-menu>
            <div class="content">
                <main-content>
                </main-content>
            </div>
        </div>
    </div>
</template>

<script>
const AppHeader = () => import ('./appHeader/AppHeader.vue');
const NavMenu = () => import('./menu/Index.vue');
const MainContent = () => import('./mainContent/Index.vue');

import moment from "moment";
import { setTimeout } from 'timers';

export default {
    name: "",
    components: {
        AppHeader,
        NavMenu,
        MainContent,
    },
};
</script>

<style lang="less">
.nav {
    &:not(.el-menu--collapse) {
        width: 200px;
    }
    .el-menu-item:not(:last-child), .el-submenu__title {
        border-bottom: 1px solid rgb(229, 229, 229);
    }
    .el-submenu.is-active .el-submenu__title {
        border-bottom-color: rgb(229, 229, 229);
    }
}
</style>

<style scoped="scoped" lang="less">
.main-container {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    position: absolute;
    top: 41px;
    bottom: 0;
    background: orange;

    .nav {
        height: 100%;
        background: rgb(238, 238, 238);
        transition: width .3s;
    }
    .content {
        background: #fff;
        flex-grow: 1;
    }
}
</style>