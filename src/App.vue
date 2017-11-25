<template>
  <div id="app">
	<mai-header></mai-header>
	<mai-sidebar></mai-sidebar>
	<!-- <mai-loading></mai-loading> -->
	<router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
import Loading from './components/Loading'
import Sidebar from './components/Sidebar'
export default {
  name: 'app',
  components: {
	maiHeader : Header,
	maiLoading : Loading,
	maiSidebar : Sidebar,
  }
}
</script>

<style lang="less">
	@import "//at.alicdn.com/t/font_476424_4gtfbxm86mg9cnmi.css";
	@import "../static/animate.css";
	@import "./assets/z.less";

		.reset-sina();
		body{
			font-family: Tahoma, Helvetica, Arial, sans-serif;
			.fs(14);
			background-color: #ebebeb
		}
		html,body,#app{
			width: 100%;
			height: 100%
		}
</style>
