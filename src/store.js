import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hasErrors: false,
    loading: false
  },
  getters: {
    loading: ({ loading }) => loading,
    hasErrors: ({ hasErrors }) => hasErrors,
  },
  mutations: {
    CLEAR_ERRORS: (state) => {
      state.hasErrors = false;
    },
    SET_ERROR_STATE: (state, payload) => {
      state.hasErrors = payload;
    },
    SET_LOADING_STATE: (state, payload) => {
      state.loading = payload;
    },
  },
  actions: {
    clearErrors({ commit }) {
      commit('CLEAR_ERRORS')
    },
    setErrorState({ commit }) {
      commit('SET_ERROR_STATE', true);
    },
    signupFromInvite({ commit }, { t, f, l, e, p, c }) {
      commit('SET_LOADING_STATE', true);
      const request = { teamName: t, firstName: f, lastName: l, emailAddress: e, password: p, code: c }

      return axios.post('localhost:8000/api/v1/user', request)
        .then(data => {
          commit('CREATE_USER', data);
        }).catch(err => {
          commit('SET_ERROR_STATE', true);
        }).finally(() => {
          commit('SET_LOADING_STATE', false);
        });
    },
    signup({ commit }, { t, f, l, e, p, w }) {
      commit('SET_LOADING_STATE', true);
      const request = { teamName: t, firstName: f, lastName: l, emailAddress: e, password: p, wantsEmail: w }

      return axios.post('localhost:8000/api/v1/user', request)
        .then(data => {
          commit('CREATE_USER', data);
        }).catch(err => {
          commit('SET_ERROR_STATE', true);
        }).finally(() => {
          commit('SET_LOADING_STATE', false);
        });
    },
  }
})
