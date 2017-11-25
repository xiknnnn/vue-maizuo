<template>
	<div class="now">
		<a href="#">
			<img :src="now.cover.origin" alt="">
			<div class="now-info">
				<div>
					<h4>{{now.name}}</h4>
					<p>{{now.cinemaCount}}家影院上映&nbsp;{{now.watchCount}}人购票</p>
				</div>
				<span>{{now.grade}}</span>
			</div>
		</a>
	</div>
</template>
<script>
export default {
	name: "",
	data: () => ({

	}),
	props:{
		now:{
			type:Object,
			required:true,

		}
	},

}
</script>
<style lang="less" scoped>
	@import "../../assets/z.less";
	.now{
		height: 100%;
		a{
			display: block;
			height: 100%;
			img{
				width: 100%;
			}
			.now-info{
				.h(50);
				.flex_b;
				padding: 0 13px;
				h4{
					.fs(12);
					.fw(400);
					color:#333;

				}
				p{
					.fs(8);
					color: #999;
				}
				span{
					.fs(18);
					color: #f78e6e
				}
			}
		}

	}
</style>
