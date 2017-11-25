import api from '../api'
import * as types from '../mutation-types'

const state = {
	cities:[],
	citiesLoading:false,
	letterCities:[],
	pinyin:[],
	currentCity:'北京'//在Header.vue显示
}

const getters = {
	cities:state=>state.cities,
	letterCities:state=>state.letterCities,
	pinyin:state=>state.pinyin,
	currentCity:state=>state.currentCity,
}

const mutations = {
	[types.GET_CITIES](state,res){
		state.cities = res.cities
	},
	[types.CHANGE_LOADING](state,status){
		state.citiesLoading = status;
	},
	[types.GET_LETTER_CITIES](state){
		let lCities = []
		function c(letter) {
			lCities = state.cities.filter(item=>item.pinyin.substr(0,1)===letter)
		}
		state.pinyin.forEach(city=>{
			c(city)
			state.letterCities.push({firstLetter:city,lCities})
		});
	},
	[types.GET_PIN_YIN](state){
		console.log(123)
		state.cities.forEach(item=>{
			let firstLetter = item.pinyin.substr(0,1);
			state.pinyin.includes(firstLetter) || state.pinyin.push(firstLetter);
		})
		state.pinyin = state.pinyin.sort()
	},
	[types.CHANGE_CURRENT_CITY](state,evt){
		// let evt = e || window.event;
		console.log(evt.target.innerHTML)
		state.currentCity = evt.target.innerHTML
	}
}

const actions = {
	getCities({commit},s){
		api.getCities(function (res) {
			commit(types.GET_CITIES,res.data);
			commit(types.GET_PIN_YIN);
			commit(types.GET_LETTER_CITIES);
		},s)
	}
}

export default {
	state,
	getters,
	mutations,
	actions,
}
