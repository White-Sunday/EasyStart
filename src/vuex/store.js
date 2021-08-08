import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0
}

/**
 * mutations 里面放置的是我们操作state对象属性的方法
 */
const mutations = {
    mutationsAddCount(state, n = 0) {
        return (state.count += n)
    },
    mutationsReduceCount(state, n = 0) {
        return (state.count -= n)
    }
}

/**
 * actions 异步操作
 */
const actions = {
    actionsAddCount(context, n = 0) {
        console.log(context)
        return context.commit('mutationsAddCount', n)
    },
    actionsReduceCount({ commit }, n = 0) {
        return commit('mutationsReduceCount', n)
    }
}

/**
 * getters 计算属性
 */
const getters = {
    getterCount(state) {
        return function(n){
            return state.count+=n
        }
    }
}
/**
 * 计算属性闭包可以传参，vue里也有缓存，但是没有这个必要，因为这是属于方法属性的工作
 */

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
