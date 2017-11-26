<template>
  <section id="">
	<div class="banner">
		<swiper :options="swiperOption"  ref="mySwiper">
			<!-- 这部分放你要渲染的那些内容 -->
			<swiper-slide v-for="(item,index) in billboard" key = 'index'>
			<a :href="item.url">
				<img :src="item.imageUrl" class="index_img">
			</a>
			</swiper-slide>
			<!-- 这是轮播的小圆点 -->
			<!-- <div class="swiper-pagination" slot="pagination"></div> -->
		</swiper>
	</div>
	<div class="now-playing">
		<ul>
			<li v-for="(now,index) in nowPlaying" key = "index">
				<now-playing  :now =  'now'></now-playing>
			</li>
		</ul>
		<router-link to="/films"><div class="more-button">更多热映电影</div></router-link>
	</div>

	<div class="coming-soon">
		<div  class="div-line">
			<div></div>
			<p>即将上映</p>
		</div>
		<ul>
			<li  v-for="(coming,index) in comingSoon" key="index" >
				<coming-soon :coming =  'coming'></coming-soon>
			</li>
		</ul>
		<router-link to="/films/coming-soon"><div class="more-button">更多即将上映电影</div></router-link>
	</div>

</section>
</template>
<script>
require('swiper/dist/css/swiper.css')
import {mapGetters,mapActions,mapMutations} from 'vuex'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import {CHANGE_FIXED_STATE} from '../../vuex/mutation-types'
import HomeNowPlaying from './HomeNowPlaying'
import HomeComingSoon from './HomeComingSoon'
export default {
	name: "",
	data: () => ({
		swiperOption: {
			notNextTick: true,
			loop:true,
			pagination: '.swiper-pagination',
			centeredSlides: true,
			paginationClickable: true,
			autoplay:2000,
			autoplayDisableOnInteraction:false,
			onSlideChangeEnd: swiper => {
			    //这个位置放swiper的回调方法
			    this.page = swiper.realIndex+1;
			    this.index = swiper.realIndex;
			},
		},
	}),
	components: {
	  swiper,
	  swiperSlide,
	  NowPlaying:HomeNowPlaying,
	  ComingSoon:HomeComingSoon
  	},
	computed:{
		...mapGetters(['billboard','nowPlaying','comingSoon']),
		swiper() {
              return this.$refs.mySwiper.swiper;
            }
	},
	methods: {
	  ...mapActions(['getBillboard','getComingSoon','getNowPlaying']),
	  ...mapMutations({
		  'changeFixed':CHANGE_FIXED_STATE
	  })
	},
	created() {
	  //do something after creating vue instance
		//获取数据
		this.billboard.length  || this.getBillboard();
		this.comingSoon.length  || this.getComingSoon();
		this.nowPlaying.length  || this.getNowPlaying();
		this.changeFixed(true);
		console.log(this.isFixed)
		// this.$store.dispatch('getBillboard');
		// this.$store.dispatch('getComingSoon');

	},
}
</script>
<style lang="less" scoped>
@import "../../assets/z.less";
	section{
		.pt(50);
		.banner{
			.h(210);
			img{
				height: 100%;
				width: 100%;
			}
		}
		// 正在热映
		.now-playing{
			.pt(18);
			li{
				margin:0 17px 17px 17px;
				.h(242);
				background-color: #fff;
				box-shadow: 0.5px 0.5px 1px #a8a8a8;
			}
		}
		// 即将上映
		.coming-soon{
			.div-line{
				div{
					width: auto;
					height: 1px;
					background-color: #a7a7a7;
				}
				p{
					width: 65px;
					height: 20px;
					margin: 0 auto;
					margin-bottom: -10px;
					border-radius: 5px;
					font-size: 10px;
					line-height: 20px;
					text-align: center;
					color: #eee;
					background-color: #a7a7a7;
					transform: translateY(-50%);
				}
			}
			li{
				margin:0 17px 17px 17px;
				.h(227);
				background-color: #fff;
				box-shadow: 0.5px 0.5px 1px #a8a8a8;
			}
		}
		// 公共
		.more-button{
			width: 160px;
			height: 30px;
			border: 1px solid #aaa;
			border-radius: 15px;
			margin: 10px auto 30px;
			text-align: center;
			line-height: 30px;
			font-size: 12px;
			color: #616161;
			cursor: pointer;
		}

	}
</style>
