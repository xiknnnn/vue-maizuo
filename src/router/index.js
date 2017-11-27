import Vue from 'vue'
import Router from 'vue-router'
import Card from '@/pages/Card/Card'
import DianZiKa from '@/pages/Card/DianZiKa'
import MaiZuoKa from '@/pages/Card/MaiZuoKa'
import Cinemas from '@/pages/Cinemas/Cinemas'
import Films from '@/pages/Films/Films'
import FilmComingSoon from '@/pages/Films/FilmComingSoon'
import FilmNowPlaying from '@/pages/Films/FilmNowPlaying'
import Home from '@/pages/Home/Home'
import Mall from '@/pages/Mall/Mall'
import User from '@/pages/User/User'
import Cities from '@/pages/Cities/Cities'
import FilmDetail from '@/pages/Detail/FilmDetail'
import CenimasDetail from '@/pages/Detail/CinemasDetail'

Vue.use(Router)

export default new Router({
	routes: [
			{
				name:'Home',
				path:'/',
				component:Home,
			},
			{
				name:'Films',
				path:'/films',
				component:Films,
				redirect:'/films/now-playing',
				children:[
					{path:'/films/coming-soon',component:FilmComingSoon},
					{path:'/films/now-playing',component:FilmNowPlaying},
				]
			},
			{
				path:'/films/:id',
				component:FilmDetail,
				name:'FilmDetail'
			},
			{
				name:'Cinemas',
				path:'/cinemas',
				component:Cinemas,
			},
			{
				path:'/cinemas/:id',
				component:CenimasDetail,
				name:'CenimasDetail'
			},
			{
				name:'Mall',
				path:'/mall',
				component:Mall
			},
			{
				name:'User',
				path:'/user',
				component:User

			},
			{
				name:'Card',
				path:'/card',
				component:Card,
				redirect:'/card/dianzika',
				children:[
					{path:'/card/dianzika',component:DianZiKa},
					{path:'/card/maizuoka',component:MaiZuoKa}
				]
			},
			{
				name:'Cities',
				path:'/Cities',
				component:Cities

			},
  ]
})
