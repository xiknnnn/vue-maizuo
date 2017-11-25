<template>
	<div id="wrapper">
		<div class="films">
			<div class="films-header">
				{{filmLoading}}
				<router-link to="/films/now-playing"><div class="router-link-exact-active router-exact-active">正在热播</div></router-link>
				<router-link to="/films/coming-soon"><div>即将上映</div></router-link>
			</div>
			<router-view ></router-view>
			<span class="loading">{{filmLoading}}<img src="../../assets/5-121204193956.gif" alt=""></span>
		</div>
	</div>
</template>
<script>
import {mapMutations,mapGetters,mapActions} from 'vuex'
import {CHANGE_FIXED_STATE} from '../../vuex/mutation-types.js'
import IScroll from 'iscroll/build/iscroll-probe'
export default {
	name: "",
	data: () => ({
		currentHeight:[]
	}),
	methods: {
		...mapMutations({
			'changeFixed':CHANGE_FIXED_STATE
		}),
		...mapActions(['getComingList','getNowList'])
	},
	computed:{
		...mapGetters(['comingList','nowList','filmLoading','currentPage'])
	},

	mounted(){
		let that = this
		this.filmScroll = new IScroll('#wrapper',{
			click:true,
			probeType:3,
			bounce:false
		})
		this.filmScroll.on('scrollEnd',function () {
			// console.log(this.y)
			// 当filmLoading状态为false的时候才能加载新内容
			console.log(that.currentPage)
			if (!that.filmLoading) {
				switch (that.currentPage) {
					case '/films/now-playing':
						that.getNowList()
						break;
					case '/films/coming-soon':
						that.getComingList();
						break;
					default:
				}
			}
		})

		 console.log(this.$route.path)
	},
	created(){
	  //do something after creating vue instance
		this.changeFixed(true);
		this.nowList.length || this.getNowList(this);
		this.comingList.length || this.getComingList();
	},
	updated() {
	  //do something after updating vue instance
	  this.filmScroll.refresh()
  	},

}
</script>
<style lang="less" scoped>
	@import "../../assets/z.less";
	#wrapper {
		.pos(f);
		.t(50);
		.b(0);
		.l(0);
		.r(0);
		.films{
			background-color: #f9f9f9;
			padding: 0 15px;
			.films-header{
			border-bottom: 1px solid #fe6e00;
			.flex_a;
			a{
				.h(45);
				width: 50%;
				.tc;
				.lh(45);
				.fs(18);
				&.router-link-exact-active{
					border-bottom: solid #fe6e00 3px;
					color:#fe6e00;
				}
			}
		}
			.loading{
				background-color: #f9f9f9;
				.flex_a;
				.h(40);

			}
		}
	}
</style>
