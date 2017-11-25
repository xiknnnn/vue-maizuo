<template>
    <div id="" class="cinemas">
		<ul>
			<li  v-for="(item,index) in district" :key="index">
				<District :dis = 'item' :first = 'district[0] == item'></District>
			</li>
		</ul>
    </div>
</template>
<script>
import {mapGetters,mapActions,mapMutations} from 'vuex';
import {CHANGE_FIXED_STATE} from '../../vuex/mutation-types'
import District from './District'
export default {
	name: "",
	data: () => ({

	}),
	computed:{
		...mapGetters(['cinemas','district']),
	},
	methods: {
		...mapActions(['getCinemas']),
		...mapMutations({
		 'changeFixed':CHANGE_FIXED_STATE
	 })
	},
	components: {
		District
  	},
	created() {
	  //do something after creating vue instance
		this.district.length || this.getCinemas();
		this.changeFixed(true);

	},

}
</script>
<style lang="less" scoped>
	.cinemas{
		padding-top: 50px;
	}
</style>
