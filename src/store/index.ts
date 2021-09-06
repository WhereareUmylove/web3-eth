import { getStorage, getUsername, removeStorage, setStorage, setUsername } from '@/utils/storage'
import { getIndustry } from "@/api/order";
import Vue from 'vue'
import Vuex from 'vuex'
import { login, logout } from "../api/login"
import { salt } from '../utils/common'
import md5 from 'crypto-js/md5'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    token: getStorage(),
    username: getUsername(),
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERNAME: (state, username) => {
      state.username = username
    },
  },
  actions: {
    Login({ commit }, option) {
      return new Promise((resolve, reject) => {
        login({ userName: option.name.trim(), password: md5(option.pass, salt()).toString() }).then(response => {
          if (response.code === 0) {
            setStorage(response.data.token);
            setUsername(response.data.userName)
            resolve(response)
          } else {
            resolve(response.code)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    Logout({ commit, state, dispatch }) {
      return new Promise((resolve, reject) => {
        logout()
          .then(response => {
            if (response.code === 0) {
              commit('SET_TOKEN', '')
              removeStorage()
              resolve(response)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GetLabelList({ commit }) {
      return new Promise((resolve, reject) => {
        getIndustry().then(res => {
          if (res.code === 0) {
            resolve(res)
            commit('SET_LABELLIST', res.data)
          }
        })
          .catch(error => {
            reject(error)
          })
      })

    },
    GetIndustry({ commit }) {
      return new Promise((resolve, reject) => {
        getIndustry().then(res => {
          if (res.code === 0) {
            resolve(res)
            commit('SET_INDUSTRYLIST', res.data)
          }
        })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  modules: {
  }
})
