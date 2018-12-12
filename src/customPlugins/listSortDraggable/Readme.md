# 封装列表拖拽排序

## props

```
value: {
    type: Array，
    description: 绑定组件的数组，
    required：true，
    通过 v-model 绑定
}

options: {
    type：Object，
    description：操作项，参考 sortablejs options
}

listWrapperSelector: {
    type：String，
    description：列表容器 css 选择器
}


```

## 使用

```javascript

// mian.js
import Draggable from '@/customPlugins/draggable/index.js';

Vue.use(Draggable);

// 组件中使用，例如 el-table
<list-sort-draggable v-model="normalTable" listWrapperSelector=".el-table__body-wrapper table tbody"></list-sort-draggable>
```