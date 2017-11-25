<template>
    <div class="cenimas-detail">
		<div class="img-container">
			<img src="http://static.m.maizuo.com/v4/static/app/asset/66461d1a02a9eaa64876c90952c42aed.png" alt="">
		</div>
		<ul class="cinemas-info">
			<li>
				<i class="iconfont icon-chair cheng"></i>
				<div>
					<h5>订座票</h5>
					<p>选好场次及座位，到影院自助机取票</p>
					<a href="">立即订座</a>
				</div>

			</li>
			<li>
				<i class="iconfont icon-zuobiao lv"></i>
				<div class="">
					<h5>{{cenimasDetail.address}}</h5>
				</div>

			</li>
			<li>
				<i class="iconfont icon-dianhua zi"></i>
				<div class="no-border-bottom">
					<h5 v-for="(telephone,index) in cenimasDetail.telephones" key="index">{{telephone}}</h5>
				</div>
			</li>
		</ul>

		<div class="services-container">
			<ul class="services">
				<li>
					<div>
						<i class="iconfont icon-piao1"></i>
						<p>取票</p>
					</div>
				</li>
				<li>
					<div>
						<i class="iconfont icon-3dyanjing"></i>
						<p>3D</p>
					</div>
				</li>
				<li>
					<div>
						<i class="iconfont icon-tingche"></i>
						<p>停车</p>
					</div>
				</li>
				<li>
					<div>
						<i class="iconfont icon-liwu icon-gongjiao"></i>
						<p>优惠</p>
					</div>
				</li>
				<li>
					<div>
						<i class="iconfont icon-gongjiao"></i>
						<p>交通</p>
					</div>
				</li>
			</ul>
			<div></div>
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
		...mapActions(['getCenimasDetail']),
		...mapMutations({
			'changeFixed':CHANGE_FIXED_STATE
		})
	},
	computed:{
		...mapGetters(['cenimasDetail']),

	},
	created() {
	  //do something after creating vue instance
		this.getCenimasDetail(this.$route.params.id);
		this.changeFixed(false);

	}
}
</script>
<style lang="less" scoped>
	.cheng{
		color: #ff8160
	}
	.lv{
		color:#40b5b5
	}
	.lan{
		color:#7bafe1
	}
	.zi{
		color:#df8f9f
	}
	.no-border-bottom{
		border-bottom: none !important;
	}
	@import "../../assets/z.less";
	.cenimas-detail{
		.img-container{
			min-height: 180px;
			width:100%;
			img{
				width: 100%
			}
		}
		.cinemas-info{
			.mb(20);
			background-color: #fff;
			li{
				display: flex;
				align-items: center;
				padding: 25px 17px 0 17px;

				i{
					.pb(25);
					.mr(17);
					.fs(28);
				}
				div{
					border-bottom: 1px #d6d6d6 dotted;
					min-width: 65%;
					position: relative;
					.pb(25);
					h5{
						.fw(400);
						.fs(15);
					}
					p{
						.fs(12);
						.lh(30);
						color:#737373
					}
					a{
						position: absolute;
						.r(-70);
						.t(-10);
						width: 94px;
						border-radius: 38px;
						height: 34px;
						border: none;
						font-size: 13px;
						background-color: #fe8233;
						color: #fff;
						.lh(34);
						.tc;
					}
				}


			}
		}
		.services-container{
			background-color: #fff;
			.services{
				.flex_a
			}
		}
	}
</style>
