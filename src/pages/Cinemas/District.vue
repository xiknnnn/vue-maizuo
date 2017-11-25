<template>
    <div class="district">
		<h4  @click = 'show = !show' >{{dis.dist}}</h4>
		<div v-for="(item,index) in dis.cine"v-show="show" key="index" class="cinemas-info">
			<router-link :to="{ name: 'CenimasDetail', params: { id: item.id}}">
				<div class="left">
					<div class="title">
						<h5>{{item.name}}</h5>
						<i class="iconfont icon-kedingzuobiaoqian cheng" v-show="item.itemTypes.includes(2)"></i><!--数据图标是否显示是根据数字进行区分-->
						<i class="iconfont icon-tong lan" v-if="item.itemTypes.includes(1)"></i>
					</div>
					<span v-for="(label,index) in item.labels" key="index" v-if="label.type" :class="label.type">{{label.name == '观影小食'?'可乐爆米花':'优惠活动'}}</span>
					<p class="address">{{item.address}}</p>
					<p class = "distance">距离未知</p>
				</div>
				<i class="iconfont icon-xiangyou"></i>
			</router-link>
		</div>
    </div>
</template>
<script>
export default {
	name: "",
	data: () => ({
		show:true,
	}),
	props: {
		dis:{
			type:Object,
			required:true
		},
		first:{
			type:Boolean,
			required:true
		}
	},
	created() {
	  //do something after creating vue instance
	  this.show = this.first
	}
}
</script>
<style lang="less" scoped>
	@import "../../assets/z.less";
	.district{
		background-color: #fff;
		width: 100%;
		h4{
			.h(40);
			.lh(40);
			.fs(14);
			.pl(16);
			.fw(400);
			.mb(2);
			background-color: #e1e1e1
		}
		.cinemas-info a{
			padding: 15px;
			border-bottom: 1px solid #e1e1e1;
			.flex_b;

			.title{
				display: flex;
				min-width:240px;
				.left{
					// flex:none;
					overflow: hidden;
				}
				h5{
					.mb(5);
					.ellipsis-basic();
					max-width: 80%;
					.fs(16);
					.lh(30);
					.fw(400);

				}
				i{
					.ml(5);
					.fw(300);
					&.cheng{
						.fs(20);
						color: red;
					}
					&.lan{
						.fs(18);
						color: #88aec8
					}
				}
			}
			.SUNDRY,.DISCOUNT{
				padding: 1px 5px;
				.ml(5);
				background-color: #51add0;
				color: #fff;
				.fs(10);
				.lh(20);
				border-radius: 3px;
			}
			.DISCOUNT{
				background-color: #ff9658;	
			}
			p{
				.fs(12);
				// .ellipsis-basic();
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				color: #ccc;
				width: 240px;
			}
			.icon-xiangyou{
				align-self: flex-start;
				.mt(5)
			}
		}
	}
</style>
