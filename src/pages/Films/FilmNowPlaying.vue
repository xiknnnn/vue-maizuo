<template>
	<ul class="now-list">
		<li v-for="(now,index) in nowList" key="index">
			<router-link :to="{ name: 'FilmDetail', params: { id: now.id}}">
				<div class="now">
					<div class="now-left">
						<img :src="now.poster.origin" alt="">
					</div>
					<div class="now-right">
						<div class="name-grade">
							<h4>{{now.name}}</h4>
							<p><span>{{now.grade}}</span><i class="iconfont icon-xiangyou"></i></p>
						</div>
						<p class="intro">{{now.intro}}</p>
						<div class="count">
							<span class="cinemaCount"><i>{{now.cinemaCount}}</i>家影院上线</span>
							<span class="scheduleCount"><i>{{now.scheduleCount}}</i>人购票</span>
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
		...mapGetters(['nowList'])
	},
	methods: {
		...mapActions(['getNowList']),
		...mapMutations({
			changeCurrentpage:CHANGE_CURRENT_PAGE
		})
	},
	mounted() {
	  //do something after mounting vue instance
	//   console.log(this.$route)

  	},
	created() {
	  //do something after creating vue instance
		this.changeCurrentpage(this.$route.path)
		// console.log(this.$route.path)
	}

	}
</script>
<style lang="less" scoped>
	@import "../../assets/z.less";
	.now-list{
			// min-height: 850px;
			li {
				border-bottom: 1px dashed #ccc;
				.now{
					padding: 18px 0;
					display: flex;
					.now-left{
						.w(60);
						img{
							width: 100%;
							height: auto;
							min-height: 80px;
							min-width: 60px;
						}
					}
					.now-right{
						.ml(20);
						display: flex;
						max-width:75%;
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
						.intro{
							color:#8e8e8e;
						}
						.count{
							color:#8e8e8e;
							.scheduleCount{
								.ml(40);
							}
							i{
								font-style: normal;
								color: #8aa2bf;
							}
						}
					}
				}
			}
		}

</style>
