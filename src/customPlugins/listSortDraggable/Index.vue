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
            type: Array,
        },
        options: {
            type: Object,
            default: () => {
                return {};
            },
        },
        listWrapperSelector: {
            type: String,
            default: '',
        },
    },
    methods: {
        /**
         * 设置拖拽
         */
        setDrag() {
            const el = document.querySelector(`#${this.wrapperId} ${this.listWrapperSelector}`);
            const options = Object.assign({}, this.options, {
                onEnd: (e) => {
                    const { oldIndex, newIndex } = e;

                    // 同步虚拟 DOM，与真实 DOM
                    if (
                        this.value && 
                        oldIndex !== newIndex
                    ) {
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
                    
                    this.options.onEnd && this.options.onEnd(e);
                },
            });
    
            Sortable.create(el, options);
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