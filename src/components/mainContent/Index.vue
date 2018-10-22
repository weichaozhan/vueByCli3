<!-- 内容主题 Tab -->
<template>
    <el-tabs v-model="tabActive" type="card" @tab-click="clickTab" @tab-remove="removeTab">
        <el-tab-pane
        v-for="item in Object.keys(tabList)"
        :key="item"
        :label="tabList[item].name"
        :name="item"
        :lazy="true"
        :closable="item !== 'home'"
        >
            <app-components :tab-active="item" :tab-list="tabList"></app-components>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import { mapMutations } from 'vuex';

// app 系统内容组件
const AppComponents = () => import('./contentComponents.vue');

export default {
    name:'',
    data() {
        return {
            tabList: {
                'home': {
                    name: '首页',
                    componentName: 'HomePage',
                },
            },
            tabActive: 'home',
        };
    },
    components: {
        AppComponents,
    },
    computed: {
            itemActiveIndex() {
                return this.$store.state.menu.itemActiveIndex;
            },
    },
    watch: {
        /**
         * 导航点击触发选项卡变化
         */
        itemActiveIndex(newValue) {
            if (newValue) {
                const msg = newValue.split('--').slice(1)
                
                if (Object.keys(this.tabList).indexOf(newValue) === -1) {
                    this.$set(this.tabList, newValue, {
                        name: msg[0],
                        componentName: msg[1],
                    });
                }
                // 激活当前选项卡
                this.tabActive = newValue;
            }
        },
    },
    methods: {
        /**
         * 映射 mutations
         */
        ...mapMutations('menu', {
            changeActiveItem: 'changeActiveItem',
        }),
        /**
         * 选项卡点击后修改导航激活的项目
         * @param {Object} tabSelected 被选中的标签 tab 实例
         */
        clickTab(tabSelected) {
            if (tabSelected.name !== 'home') {
                this.changeActiveItem(tabSelected.name);
            } else {
                this.changeActiveItem('');
            }
        },
        /**
         * 点击 tab 移除按钮后触发
         * @param {String} tabRemoveName 被删除的标签的 name
         */
        removeTab(tabRemoveName) {
            if (tabRemoveName !== 'home') {
                let tabs = Object.keys(this.tabList);

                this.$delete(this.tabList, tabRemoveName);
                //如果关闭的tab为激活状态，关闭后激活显示前一个 tab 和导航
                if (this.tabActive === tabRemoveName) {
                    let currentIndex = tabs.indexOf(tabRemoveName);

                    this.tabActive = tabs[currentIndex - 1];
                    // 当关闭标签后，只剩 “首页” 标签，菜单置为无激活状态
                    this.changeActiveItem(currentIndex - 1 === 0 ? '' : this.tabActive);
                }
            } else {
                this.changeActiveItem('');
            }
        },
    }
}
</script>

<style scoped>

</style>