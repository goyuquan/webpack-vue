import shop from '../../api/shop'
import http from '../../api/http'
import router from '../../router'

const state = {
  status: null,
  token: localStorage.getItem('token') || ''
}

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
}

const mutations = {
  AUTH_REQUEST (state) {
    state.status = 'loading'
  },
  AUTH_SUCCESS (state) {
    state.status = 'success'
  },
  AUTH_ERROR (state) {
    state.status = 'error'
  },
  logOut (state) {
    state.status = false
    localStorage.removeItem('token')
  }
}

const actions = {
  logOut ({commit}) {
    commit('logOut')
    router.push('/login')
  }
}

export default { state, getters, mutations, actions }
