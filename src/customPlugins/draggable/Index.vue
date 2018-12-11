<template>
    <div :id="wrapperId">
        <slot></slot>
    </div>
</template>

<script>
import Sortable from 'sortablejs';

export default {
    name:'',
    data() {
        return {
            wrapperId: `wrapperId--${Date.now()}`
        };
    },
    props: {
        value: {
            required: true,
            type: Array,
        }
    },
    methods: {
        /**
         * 设置拖拽
         */
        setDrag() {
            const el = document.querySelector(`#${this.wrapperId} .el-table__body-wrapper table tbody`);
    
            Sortable.create(el, {
                draggable: 'tr',
                onEnd: ({oldIndex, newIndex}) => {
                    // 同步虚拟 DOM，与真是 DOM
                    if (oldIndex !== newIndex) {
                        const trList = el.children;
                        const newTr = trList[newIndex];
                        const oldTr = trList[oldIndex];
                        
                        el.removeChild(newTr);
        
                        if(newIndex > oldIndex) {
                            el.insertBefore(newTr, oldTr);
                        } else {
                            el.insertBefore(newTr, oldTr.nextSibling);
                        }

                        // 修改数据
                        const valueCache = [...this.value];
                        const crr = valueCache.splice(oldIndex, 1);
        
                        valueCache.splice(newIndex, 0, crr[0]);
                        this.$emit('input', valueCache);    
                    }                    
                },
            });
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.setDrag();
        });
    }
};
</script>

<style scoped>

</style>