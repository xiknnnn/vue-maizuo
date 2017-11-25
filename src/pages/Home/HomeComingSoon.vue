<template>
	<div class="coming">
		<a href="#">
			<img :src="coming.cover.origin" alt="">
			<div class="coming-info">
				<h4>{{coming.name}}</h4>
				<span>{{new Date(coming.premiereAt).getMonth()+1}}-{{new Date(coming.premiereAt).getDate()}}上映</span>
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
		coming:{
			type:Object,
			required:true,
			default: function () {
	                return  null
	            }
		}
	},
}
</script>
<style lang="less" scoped>
	@import "../../assets/z.less";
	.coming{
		height: 100%;
		a{
			display: block;
			height: 100%;
			img{
				width: 100%;
				min-height: 191px;
			}
			.coming-info{
				.h(35);
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
					.mr(20);
					.fs(12);
					color: #f78e6e
				}
			}
		}

	}
</style>
