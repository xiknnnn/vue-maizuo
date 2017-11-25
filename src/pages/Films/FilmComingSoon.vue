<template>
	<ul class="coming-list">
		<li v-for="(coming,index) in comingList" key="index">
		<router-link :to="{ name: 'FilmDetail', params: { id: coming.id}}">
				<div class="coming">
				<div class="coming-left">
					<img :src="coming.poster.origin" alt="">
				</div>
				<div class="coming-right">
					<div class="name-grade">
						<h4>{{coming.name}}</h4>
						<p><i class="iconfont icon-xiangyou"></i></p>
					</div>
					<p class="intro">{{coming.intro}}</p>
					<div class="premiereAt">
						<span>{{new Date(coming.premiereAt).getMonth()+1}}月{{new Date(coming.premiereAt).getDate()}}日上映</span>
						<span class="day">星期{{new Date(coming.premiereAt).getDay()}}</span>
					</div>
				</div>
			</div>
		</router-link>
		</li>
	</ul>
</template>
<script>
import {mapGetters,mapActions,mapMutations} from 'vuex'
import {CHANGE_CURRENT_PAGE} from '../../vuex/mutation-types'
export default {
	name: "",
	data: () => ({

	}),
	computed:{
		...mapGetters(['comingList'])
	},
	methods: {
		...mapActions(['getComingList']),
		...mapMutations({
			changeCurrentpage:CHANGE_CURRENT_PAGE
		})
	},
	mounted() {
	  //do something after mounting vue instance
	  this.changeCurrentpage(this.$route.path)
	}


}
</script>
<style lang="less" scoped>
@import "../../assets/z.less";
.coming-list{
	li {
		border-bottom: 1px dashed #ccc;
		.coming{
			padding: 18px 0;
			display: flex;
			.coming-left{
				.w(60);
				img{
					width: 100%;
					height: auto;
					min-height: 80px;
				}
			}
			.coming-right{
				.ml(20);
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				align-content: stretch;
				flex: 1 1 auto;
				.name-grade{
					.flex_b;
					h4{
						max-width:50%;
						.fs(16);
						.lh(32);
						.fw(400);
						color:#000;
						text-overflow: ellipsis;
						overflow: hidden;
						white-space: nowrap;
					}
					p{
						.mr(20);
						span {
							.fs(16);
							color:#fc7103;
						}
						i{
							.fs(12);
							.lh(16);
							color: #c6c6c6
						}
					}
				}
				.premiereAt{
					color:#ffb375;
					.day{
						.ml(20)
					}
				}
			}
		}
	}
}
</style>
