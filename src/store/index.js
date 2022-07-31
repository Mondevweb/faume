import { createStore } from 'vuex'

export default createStore({
    state: {
        selection: []
    },

    mutations: {
        setSelection(state, selection) {
            state.selection = selection;
        }
    },

    actions: {
        getSelection(context) {
            fetch('https://fakestoreapi.com/products?limit=4')
                .then((response) => response.json())
                .then((json) => context.commit('setSelection', json));
        }
    }
})