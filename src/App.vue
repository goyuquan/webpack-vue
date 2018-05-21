<template>
    <div id="app">
        <img src="./assets/logo.png">
        <ul>
            <li v-for="li of list">
                <router-link :to="li.url">{{li.name}}</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            list: [
                // { name: '/', url: 'dashbard' },
                { name: 'setting', url: 'setting' },
            ]
        }
    },
    mounted() {
      document.body.removeChild(document.getElementById('Loading'));
    }
}
</script>

<style lang="scss">
#app {
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
