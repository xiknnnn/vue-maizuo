// 引入vue vuex
import Vue from 'vue';
import Vuex from 'vuex';
// 在vue中使用vuex
Vue.use(Vuex);
import common from './modules/common'
import home from './modules/home'
import films from './modules/films'
import cities from './modules/cities'
import cinemas from './modules/cinemas'
const store =  new Vuex.Store({
	modules:{
		common,
		home,
		films,
		cities,
		cinemas
	},
	strict:process.env.NODE_ENV !== 'production'
})
export default store
