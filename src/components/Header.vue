<template>
    <nav id="header" :class="{fixed:isFixed}">
		<h1 class = 'header-left' @click.prevent = 'showMenu'>
			<a href="">
				<div class="menu-icon"><i class="iconfont icon-caidan"></i></div>
				<div class="logo">卖座电影</div>
			</a>
		</h1>
		<div class = 'header-right'>
			<a href="" class="location">
				<router-link to='/cities'>
					<div class="">{{currentCity}}</div>
					<i class="iconfont icon-down-trangle"></i>
				</router-link>


			</a>
			<a href="#/user"  class="iconfont icon-geren signin"></a>
		</div>
    </nav>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
export default {
	name: "",
	data: () => ({

	}),
	methods: {
	  showMenu(){
		  return this.$store.dispatch('changeMenuState',true)
	  },
	},
	computed:{
		...mapGetters(['isFixed','currentCity'])
	}
}
</script>
<style lang="less" scoped>
	@import "../assets/z.less";
	nav {
		&.fixed{
			.pos(f);
			z-index: 9;
			.t(0);
		}
		background-color: #282828;
		width: 100%;
		.h(50);
		.flex_b();
		a{
			color: #999999;
			.fs(14);
		}
		/*头部左边区域*/
		.header-left{
			a{

				.flex_b;
				.menu-icon {
					.h(50);
					.w(48);
					border-right: 1px solid #222;
					box-shadow: 1px 0 1px #363636;
					display: flex;
					i{
						margin: auto;
					}
				}
				.logo{
					padding: 0 14px;
					color:#efefef
				}
			};

		}
		/*头部右边区域*/
		.header-right{
			.flex_a;
			.location{
				a{
					.flex_a
				}

			}
			.signin{
				.h(50);
				.w(48);
				.lh(50);
				text-align: center;
			}
		}
	}
</style>
