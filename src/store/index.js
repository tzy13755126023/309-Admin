import Vue from 'vue'
import Axios from  'axios'
import Vuex from 'vuex'
Vue.use(Vuex)

let store = new Vuex.Store({
	state:{
		token:'',
		username:'',
		imageurl:'',
		openedTab: ['index'],
    	activeTab: ''
	},
	mutations:{
		//设置vuex的token
		setToken(state,token){
			state.token = token
		},
		//保存用户名
		setUsername(state,username){
			state.username = username
		},
		addTab (state, componentName) {
			state.openedTab.push(componentName)
		},
		changeTab (state, componentName) {
		state.activeTab = componentName
		},
		deductTab (state, componentName) {
		let index = state.openedTab.indexOf(componentName)
		state.openedTab.splice(index, 1)
		}
	},
	actions:{

	},
	//相当于vue中的计算属性
	getters:{

	}
})

export default store;