// 引入相关文件
import api from '../api';
import * as types from '../mutation-types';

const state = {
	cinemas:[],
	district:[],
	showDetail:false,
	cenimasDetail:{},
}

const getters = {
	cinemas:state => state.cinemas,
	district:state => state.district,
	cenimasDetail:state => state.cenimasDetail,
}

const  mutations = {
	[types.GET_CINEMAS](state,res){
		state.cinemas = res.cinemas
	},
	[types.GET_DTRICT](state){
		state.cinemas.forEach(item => {
			if (state.district.some(d=>d.dist ===item.district.name)) {

				state.district.forEach(d=>d.dist===item.district.name&&d.cine.push(item))
			}else {
				// console.log(district)
				state.district.push({dist:item.district.name,cine:[item]})
			}
		})
	},
	[types.GET_CENIMAS_DETAIL](state,res){
		state.cenimasDetail = res.cinema
	}
}

const actions = {
	getCinemas({commit}){
		api.getCinemas(function (res) {
			commit(types.GET_CINEMAS,res.data)
			commit(types.GET_DTRICT)
		})
	},
	getCenimasDetail({commit},id){
		api.getCenimasDetail(id,function (res) {
			commit(types.GET_CENIMAS_DETAIL,res.data)
		})
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}
