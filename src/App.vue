<template>
  <div id="app">
    <button type="button" @click="onLogout()">退出logout</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },
  mounted() {
    document.body.removeChild(document.getElementById('loader'));
  },
  methods: {
    onLogout() {
      this.$store.dispatch('logOut')
    }
  }
}
</script>

<style lang="scss"> </style>
