import state from './ExamState'
import getter from './ExamGetter'
import mutation from './ExamMutations'
import action from './ExamAction'
export default {
    namespaced: true,    //命名空间
    state: () => state,
    getters: getter,
    mutations: mutation,
    actions: action
}