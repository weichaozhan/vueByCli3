const CHANGE_ACTIVE_ITEM = 'changeActiveItem';

const menu = {
    namespaced: true,
    state: {
        itemActiveIndex: '', // 激活的菜单项 index
    },
    mutations: {
        [CHANGE_ACTIVE_ITEM](state, payload) {
            state.itemActiveIndex = payload;
        },
    }
};

export default menu;