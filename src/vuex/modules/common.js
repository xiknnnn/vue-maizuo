import * as types from '../mutation-types'
// 通用配置项
const state = {
	title:'',//标题
	menuState:false,//左边菜单栏状态
	isFixed:false,//头部是否固定定位
	loading:0,
}

const getters = {
	comState: state => state,
	loading:state=>state.loading,
	title:state=>state.title,
	menuState:state=>state.menuState,
	isFixed:state=>state.isFixed,
}

const mutations = {
	[types.CHANGE_MENU_STATE](state,status){
		state.menuState =status
	},
	[types.SET_LOADING_STATE](state,status){
		state.loading = status
	},
	[types.CHANGE_FIXED_STATE](state,status){
		state.isFixed = status
	}
}

const actions = {
	//导航栏开关
	changeMenuState({commit},status){
		commit(types.CHANGE_MENU_STATE,status)
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}
