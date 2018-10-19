<!-- 系统内容入口 -->
<template>
    <div>
        <app-header></app-header>
    </div>
</template>

<script>
const AppHeader = () => import ("./AppHeader.vue");

import moment from "moment";

export default {
    name: "", 
    components: {
        AppHeader
    }
};
</script>

<style scoped="scoped" lang="less">
</style>