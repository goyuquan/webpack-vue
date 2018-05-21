<template>
  <div class="wrap">
    <form class="login_form" @submit.prevent="login">
      <h1>Login in</h1>
      <label>User name
        <input required v-model="formModel.username" type="text" placeholder="Snoopy"/>
      </label>
      <label>Password
        <input required v-model="formModel.password" type="password" placeholder="Password"/>
      </label>
      <hr/>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      formModel: {
        username: '',
        password: '',
      },
      msg: 'Welcome to Your Vue.js dashbard'
    }
  },
  methods: {
    login () {
      const { formModel } = this
      // this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
        this.$router.push('/')
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrap {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login_form {
    width: 20rem;
    height: 16rem;
    border: 0.1rem solid #333;
  }
  label {
    display: block;
  }
</style>
