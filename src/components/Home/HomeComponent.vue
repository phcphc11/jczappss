<template>
	<div id="home">
		<ScrollAD></ScrollAD>
		<HomeNavBar></HomeNavBar>
		<JingXuan v-if="JXshow"></JingXuan>
		<keep-alive>
		<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script type="text/javascript">
import ScrollAD from '@/components/commons/ScrollAD'
import HomeNavBar from './HomeNavBar'
import JingXuan from '@/components/Home/JingXuan/JingXuan'
	export default{
		components:{
			ScrollAD,
			HomeNavBar,
			JingXuan,
		},
		created(){
			// console.log(this.$store.getters.GET_SLECTED_INDEX)
			this.$router.push(this.$store.getters.GET_SLECTED_INDEX)
		},
		data(){
			return {
				JXshow:true,
			}
		},
		watch:{
			'$route'(to,from){
				if (to.path!='/home') {
					this.JXshow=false
				}else{
					this.JXshow=true;
				}
			}
		}
	}
</script>

<style>
	#home{
		display: flex;
		flex-direction: column;
		margin-bottom: 44px;
	}
</style>