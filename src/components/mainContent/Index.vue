<template>
    <el-tabs v-model="tabActive" type="card" closable @tab-remove="removeTab">
        <el-tab-pane
        v-for="(item, index) in Object.keys(tabList)"
        :key="item.name"
        :label="item.title"
        :name="item.name"
        >
        {{item.content}}
        </el-tab-pane>
    </el-tabs>
</template>

<script>
export default {
    name:'',
    data(){
        return {
            tabList: {
                'home': '首页',
            },
        };
    },
    computed: {
            itemActiveIndex() {
                return this.$store.state.menu.itemActiveIndex;
            },
    },
    watch: {
        itemActiveIndex(newValue) {
            const msg = newValue.split('--').slice(1)

            if (Object.keys(this.tabList).indexOf(newValue) === -1) {
                this.tabList.push({
                    [newValue]: msg[2]
                })
            }
        },
    },
}
</script>

<style scoped>

</style>