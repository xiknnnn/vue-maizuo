<template>
	<div class="cities"  id="cities">
		<ul ref = 'list'>
			<li class="gps">
				<h4>GPS定位一所在的城市</h4>
				<div>
					<a href="" @click.prevent = 'changeCity'>深圳</a>
				</div>
			</li>
			<li class="hot">
				<h4>热门城市</h4>
				<div>
					<a href="" @click.prevent = 'changeCity'>北京</a>
					<a href="" @click.prevent = 'changeCity'>上海</a>
					<a href="" @click.prevent = 'changeCity'>广州</a>
					<a href="" @click.prevent = 'changeCity'>深圳</a>
				</div>
    		</li>
			<li class="letters">
				<h4>按字母排序</h4>
				<div>
					<span v-for="(letter,index) in pinyin" key="key" @click.prevent ='scrollToElement(letterlist[index],500)'>{{letter}}</span>
				</div>
    		</li>
			<li v-for="(item,index) in letterCities" key="index">
				<h4 class = 'letter'>{{item.firstLetter}}</h4>
				<div>
					<router-link to="/" v-for="(city,index) in item.lCities" key="index"><span  @click = 'changeCity'>{{city.name}}</span></router-link>
				</div>
			</li>
    	</ul>
    </div>
</template>
<script>
import {mapActions,mapGetters,mapMutations} from 'vuex'
import {CHANGE_FIXED_STATE,CHANGE_CURRENT_CITY} from '../../vuex/mutation-types'
import IScroll from 'iscroll';
export default {
	name: "",
	data: () => ({
		lll:[],
		letterlist:[]
	}),
	computed:{
		...mapGetters(['isFixed','cities','pinyin','letterCities','currentCity']),
	},
	methods: {
		...mapActions(['getCities']),
		...mapMutations({
			  'changeFixed':CHANGE_FIXED_STATE,
			  'changeCurrentCity':CHANGE_CURRENT_CITY
		}),
		changeCity(e){
			let evt = e || window.event;
			this.changeCurrentCity(evt)
		},
		_getLetterOffsetTop(){
			this.letterlist = Array.from(this.$refs.list.querySelectorAll('.letter'))
		},
		scrollToElement(el,time){
			this.myScroll.scrollToElement(el,time);
		},

	},
	created() {
	  //do something after creating vue instance
	  this.cities.length || this.getCities();
	  this.changeFixed(true);
	},
	mounted() {
		// this._getLetterOffsetTop()
		this.myScroll =new IScroll('#cities',{click:true,scrollbars: true,bounce:true,});
		this._getLetterOffsetTop()//页面再次载入的时候
	},
	updated() {
	  //do something after updating vue instance
		let that = this
		setTimeout(function () {
			that.myScroll.refresh()
		},0)
		this._getLetterOffsetTop()//页面首次进入的时候
	}

}
</script>
<style lang="less" scoped>
	@import "../../assets/z.less";
	.cities{
		// .pt(50);
		.pos(f);
		.t(50);
		.b(0);
		.l(0);
		.r(0);
		background-color: #fff;
		li{
			&.gps{
				a{
					color: #e2941a;
				}
			}
			.lh(40);
			h4{
				.fs(14);

				.fw(400);
				.pl(10);
				background-color: #ebebeb;
			}
			div{
				display: flex;
				flex-wrap: wrap;
				a,span{
					width: 25%;
					.tc;
					color: #838383;
					border-bottom: #ebebeb 1px solid;
					.fs(16);
				}

			}
		}
	}
</style>
