<!-- 菜单递归 -->
<template>
    <el-submenu v-if="menuItem.children && menuItem.children.length" :index="menuIndex"  >
        <template slot="title">
            <i v-if="menuItem.icon" :class="menuItem.icon"></i>
            <span>{{menuItem.name}}</span>
        </template>
        <nav-item v-for="(item, index) in menuItem.children" :key="`${menuIndex}-${index}`" :menuItem="item" :menuIndex="`${menuIndex}-${index}`" >
        </nav-item>
    </el-submenu>
    <el-menu-item v-else :index="`${menuIndex}--${menuItem.name}--${menuItem.component || ''}`">
        <i v-if="menuItem.icon" :class="menuItem.icon"></i>
        {{menuItem.name}}
    </el-menu-item>
</template>

<script>
export default {
  name:'NavItem',
  data(){
    return {
    };
  },
  props: {
      menuItem: {
          required: true,
          type: Object,
      },
      menuIndex: {
          required: true
      },
  }
}
</script>

<style scoped>

</style>