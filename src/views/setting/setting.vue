<template src="./setting.html"> </template>

<script>
import Vue from 'vue';
import { mapState, mapGetters } from 'vuex';
import common from '../../common.js';

export default {
    name: 'setting',
    data () {
        return {
            msg: 'Welcome to Your Vue.js setting'
        }
    },
    computed: {
        otherComputed() {

        },
        ...mapState({
            listName0: state => state.listName,
            word: state => state.word,
        }),
        ...mapGetters([
            'listName',
            'showUser',
        ])
    },
    methods: {
        addone() {
            this.$store.commit('increment')
        },
        changeName() {
            this.$store.commit('chageName', "Green")
        },
        logSth() {
            common()
        }
    }
}
</script>

<style lang="scss" scoped src="./setting.scss"> </style>
