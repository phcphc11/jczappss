import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const state={
	selectedIndex:'/home/JingXuan'
}
const getters={
	GET_SLECTED_INDEX(state){
		return state.selectedIndex;
	}
}

const mutations = {
	SET_SELECTED_INDEX(state,content){
		state.selectedIndex=content;
	}
}

const actions={
	select_Index({commit},content){
		commit('SET_SELECTED_INDEX',content)
	}
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})