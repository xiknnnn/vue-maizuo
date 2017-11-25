<template>
    <div class="film-detail"   v-show="filmDetail!=null">
		<div class="img-container">
			<img :src = "src" alt="">
		</div>
		<div class="film-intro">
			<h4>影片简介</h4>
			<ul>
				<li><span>导　　演：</span>{{filmDetail.director}}</li>
				<li><span>主　　演：</span><span   class="actors">{{actors}}</span></li>
				<li><span>地区语言：</span>{{filmDetail.languages}}</li>
				<li><span>类　　型：</span>{{filmDetail.category}}</li>
				<li><span>上映日期：</span>{{filmDetail.premiereAt}}</li>
				<li class="">{{filmDetail.synopsis}}</li>
			</ul>
		</div>
    </div>
</template>
<script>
import {mapActions,mapGetters,mapMutations} from 'vuex';
import {CHANGE_FIXED_STATE} from '../../vuex/mutation-types'

export default {
	name: "",
	data: () => ({
	}),
	methods: {
		...mapActions(['getFilmDetail']),
		...mapMutations({
			'changeFixed':CHANGE_FIXED_STATE
		})
	},
	computed:{
		...mapGetters(['filmDetail']),
		actors(){
			let arr = [];
			if (this.filmDetail.actors) {
				arr = this.filmDetail.actors.map(item=>item.name)
				return arr.join('|')
			}
		},
		src(){
			if (this.filmDetail.cover) {
				return this.filmDetail.cover.origin
			}
		}
	},
	created() {
	  //do something after creating vue instance
		this.getFilmDetail(this.$route.params.id);
		this.changeFixed(true);

	}
}
</script>
<style lang="less" scoped>
	@import "../../assets/z.less";

	.film-detail{
		background-color: #ebebeb;
		min-height:90%;
		.pt(50);
		.img-container{
			min-height: 210px;
			img{
				width: 100%;
				height: auto;
			}
		}
		.film-intro{
			h4{
				margin: 16px auto;
				border-left: 16px solid RGB(228, 200, 156);
				font-size: 16px;
				padding-left: 4px;
			}
			ul{
				padding: 0 20px;
				.lh(22);
				.fs(12);
				li{
					overflow: hidden;
					.actors {
						display: inline-block;
						vertical-align: top;
						.ellipsis-basic();
						max-width: 80%;
					}
				}
			}
		}
	}
</style>
