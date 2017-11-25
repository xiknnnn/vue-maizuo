// 引入api获取数据
import api from '../api'
import axios from 'axios'
import * as types from '../mutation-types'

axios.interceptors.request.use(function (config) {    // 这里的config包含每次请求的内容
    if (getters.getToken) {
        config.headers.Authorization = `Token ${getters.getToken}`;
    }
    return config;
}, function (err) {
    return Promise.reject(err);
});
const state = {
	billboard:[],
	nowPlaying:[],
	comingSoon:[]
}

const getters ={
	billboard:state =>state.billboard,
	nowPlaying:state =>state.nowPlaying,
	comingSoon:state =>state.comingSoon,
}

const mutations = {
	[types.HOME_GET_BILLBOARD](state,res){
		state.billboard = res.billboards;
	},
	[types.HOME_GET_NOW_PLAYING](state,res){
		state.nowPlaying = res.films;
	},
	[types.HOME_GET_COMING_SOON](state,res){
		state.comingSoon = res.films;
	},
}

const actions = {
	getBillboard({commit}){
		commit(types.SET_LOADING_STATE,true);//打开loading开关
		api.getBillboard(function (res) {
			commit(types.HOME_GET_BILLBOARD,res.data);
			commit(types.SET_LOADING_STATE,false);//打开loading开关
		})
	},
	getComingSoon({commit}){
		commit(types.SET_LOADING_STATE,true);
		api.getComingSoon(function (res) {
			commit(types.HOME_GET_COMING_SOON,res.data);
			commit(types.SET_LOADING_STATE,false);//打开loading开关
		})
	},
	getNowPlaying({commit}){
		commit(types.SET_LOADING_STATE,true);
		api.getNowPlaying(function (res) {
			commit(types.HOME_GET_NOW_PLAYING,res.data);
			commit(types.SET_LOADING_STATE,false);//打开loading开关
		})
	}
}

export default {
	state,
    actions,
    getters,
    mutations
}
