import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        word: '[[word]]',
        phrase: 'this is word phrase',
        userInfo: {
            id: 32,
            name: 'Jim'
        },
        list: [
            { name: 'one', value: 1 , age: 12 },
            { name: 'two', value: 2 , age: 12 },
            { name: 'three', value: 3 , age: 12 },
            { name: 'four', value: 4 , age: 14 }
        ]
    },
    getters: {
        listName: state => {
            return state.list.filter(list => list.age < 14)
        },
        showUser: (state, getters) => {
            return Object.assign(
                state.userInfo,
                {dataLength: getters.listName.length}
            )
        }
    },
    mutations: {
        increment (state) {
            state.list.push({
                name: 'five',
                value: 5,
                age: 6
            })
        },
        chageName (state, param) {
            state.userInfo.name = param;
        }
    }
})

export default store;
