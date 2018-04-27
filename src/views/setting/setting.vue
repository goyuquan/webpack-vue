<template>
    <div>
        <span>{{ msg }}</span>
        <span>Essential Links~~~~~~~setting~~~~~~</span>
        <span>vuex store word is {{word}}</span>
        <ul>
            <li v-for="item in listName">{{item}}</li>
        </ul>
        <pre>{{showUser}}</pre>
        <button @click="addone()">addone</button>
        <button @click="changeName()">changeName</button>
        <button @click="logSth()">logSth</button>
    </div>
</template>

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

<style lang="scss">
    #bpp {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
