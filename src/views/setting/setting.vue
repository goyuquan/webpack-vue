<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>Essential Links~~~~~~~setting~~~~~~</h2>
    </div>
</template>

<script>
export default {
    name: 'setting',
    data () {
        return {
            msg: 'Welcome to Your Vue.js setting'
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
