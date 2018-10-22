<!-- APP 导航相关的最外部组件群 -->
<template>
    <div class="wrapper">
        <keep-alive>
            <component v-bind:is="componentActive"></component>
        </keep-alive>
    </div>
</template>

<script>
import {
    MENU_LIST,
    APP_COMPONENTS,
} from '@/public/constant';

export default {
    name:'',
    data() {
      return {
      };
    },
    props: {
        tabList: {
            type: Object,
        },
        tabActive: {
            type: String,
        },
    },
    computed: {
        componentActive() {
            const activeC = this.tabList[this.tabActive].componentName;

            return activeC ? APP_COMPONENTS[activeC] : APP_COMPONENTS['NotFound'];
        }
    },
}
</script>

<style scoped lang="less">
.wrapper {
    padding: 10px;
}
</style>