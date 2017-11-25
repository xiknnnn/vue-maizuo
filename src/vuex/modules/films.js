import api from '../api';
import * as types from '../mutation-types'

const state = {
	nowList:[],
	comingList:[],
	nowPage:0,
	comingPage:0,
	getMoreNow:true,
	getMoreComing:true,
	filmLoading:false,//是否等待中
	currentPage:'',
	filmDetail:{},//电影详情页
}

const getters = {
	nowList:state=>state.nowList,
	comingList:state=>state.comingList,
	nowPage:state=>state.nowPage,
	comingPage:state=>state.comingPage,
	getMoreNow:state=>state.getMoreNow,
	getMoreComing:state=>state.getMoreComing,
	filmLoading:state=>state.filmLoading,
	currentPage:state=>state.currentPage,
	filmDetail:state=>state.filmDetail,
}

const mutations = {
	[types.FILMS_GET_NOW](state,res){
		state.nowList = state.nowList.concat(res.films)
	},
	[types.FILMS_GET_COMING](state,res){
		state.comingList = state.comingList.concat(res.films)
	},
	[types.GET_FILM_DETAIL](state,res){
		console.log(res.film)
		state.filmDetail = res.film
	},
	[types.UPDATE_NOW_PAGES](state){
		state.nowPage+=1
	},
	[types.UPDATE_COMING_PAGES](state){
		state.comingPage+=1
	},
	[types.CHANGE_MORE_NOW](state,status){
		state.getMoreNow = status
	},
	[types.CHANGE_MORE_COMING](state,status){
		state.getMoreComing = status
	},
	[types.CHANGE_FILM_LOADING](state,status){
		state.filmLoading = status
	},
	[types.CHANGE_CURRENT_PAGE](state,page){
		state.currentPage = page;
	}
}

const actions = {
	getNowList({commit},r){
		if (!state.filmLoading&&state.getMoreNow || !state.nowPage) {//如果状态是true，才能获取数据,因为获取nowlist和获取cominglist是同时进行，但是没有第三个条件时第一个获取的同时改变了filmLoading的值，无法进行第二个，所以新增第三个判断条件，让数据可以在第一次获取时得到
			commit(types.CHANGE_FILM_LOADING,true)
			commit(types.UPDATE_NOW_PAGES);
			api.getNowList(state.nowPage,function (res) {
				commit(types.FILMS_GET_NOW,res.data)
				commit(types.CHANGE_FILM_LOADING,false)
					// 如果请求的页数大于了总数,不能再请求数据
				state.nowPage>=res.data.page.total&&commit(types.CHANGE_MORE_NOW,false)
			},r)
		}
	},
	getComingList({commit},r){
		if (!state.filmLoading&&state.getMoreComing || !state.comingPage) {//如果状态是true，才能获取数据
			commit(types.CHANGE_FILM_LOADING,true)
			commit(types.UPDATE_COMING_PAGES);
			api.getComingList(state.comingPage,function (res) {
				commit(types.FILMS_GET_COMING,res.data)
				commit(types.CHANGE_FILM_LOADING,false)
					// 如果请求的页数大于了总数,不能再请求数据
				state.comingPage>=res.data.page.total&&commit(types.CHANGE_MORE_COMING,false)
			},r)
		}
	},
	// 获取电影详情页数据
	getFilmDetail({commit},id){
		api.getFilmDetail(id,function (res) {
			commit(types.GET_FILM_DETAIL,res.data)
		})
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}
