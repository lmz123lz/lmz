import { createStore } from 'vuex'
//数据持久化
import createPersistedState from "vuex-persistedstate"
import exam from './mudules/Exam/Exam'
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    exam: exam
  },
  /* vuex数据持久化配置 */
  plugins: [
    createPersistedState({
        storage: window.sessionStorage,  //存储方式改为sessionStorage
        reducer(val) {
            return {
                listdata: val.listdata,
            }
        }
    }),
]
})
