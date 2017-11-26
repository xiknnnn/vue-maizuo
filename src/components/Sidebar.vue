<template>
	<aside  @click ='hideMenu'>
		<transition enter-active-class ='animated fadeIn' leave-active-class = 'animated fadeOut'>
			<div class="mask" v-if="menuState"></div>
		</transition>
		<transition name ='slide'>
			<div class="sidebar" v-if="menuState">
				<ul>
					<li v-for="(menuItem,index) in menuLIst" :key="index">
						<router-link :to="menuItem.path"><h4>{{menuItem.name}}</h4><i class="iconfont icon-xiangyou"></i></router-link>
					</li>
				</ul>
			</div>
		</transition>
	</aside>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
	name: "",
	data() {
		let menuLIst = [
			{
				name:'首页',
				path:'/'
			},
			{
				name:'影片',
				path:'/films'
			},
			{
				name:'影院',
				path:'/cinemas'
			},
			{
				name:'商城',
				path:'/mall'
			},
			{
				name:'我的',
				path:'/user'
			},
			{
				name:'卖座卡',
				path:'/card'
			},
		]
		return {
			menuLIst
		}
	},
	computed:{
		...mapGetters(['menuState'])
	},
	methods:{
		hideMenu(){
			this.$store.dispatch('changeMenuState',false)
		}
	}
}
</script>
<style lang="less" scoped>
	@import "../assets/z.less";
	.slide-enter,.slide-leave-active{
		transform:translateX(-100%);
	}
	.slide-enter-active,.slide-leave-active{transition: all .3s}
	aside {
		.pos(f);
		z-index: 10;
		width: 100%;
		.mask{
			.pos(f);
			.l(0);
			.r(0);
			.t(0);
			.b(0);
			.pt(50);
			background-color: rgba(0,0,0,.3);
			height: 100%
		}
		.sidebar{
			.pos(a);
			.t(50);
			.b(0);

			height: 620px;
			width: 70%;
			// height: 100%;
			background-color: #282828;
			border-top: 1px solid #222;
			box-shadow: 0 1px 1px #363636 inset;
			li {
				border-bottom: 1px solid #333;
				a{
					padding: 0 10px;
					.flex_b();
					color: #9a9a9a;
					.h(50);
					.fs(14);
					h4{
						.fw(200);
					}
				}
			}
		}
	}
</style>
