<template>
	<div id="homeNavBar">
		<ul>
			<!-- <router-link v-for="(item,index) in navTitleList" :to='item'> -->
				<li v-for="(item,index) in navTitleList" v-on:click="pushTo(item,index)" :class="{active:selectIndex==index,'lastSlected':lastSlected==item}">
					{{index}}
				</li>
			<!-- </router-link>	 -->
		</ul>
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				navTitleList:{
					"精选":'/Home/JingXuan',
					"优惠":'/Home/YouHui',
					"海淘":'/Home/HaiTao',
					"发现":'/Home/FaXian',
					"原创":'/Home/YuanChuang'
				},
				selectIndex:'',
			}
		},
		methods:{
			pushTo(item,index){
				this.$router.push(item);
				this.selectIndex=index;
				this.$store.dispatch('select_Index',item)
			}
		},
		computed:{
			lastSlected(){
				return this.$store.getters.GET_SLECTED_INDEX;
				// console.log(this.$store.getters.GET_SLECTED_INDEX)
			}
		}
	}
</script>

<style scoped>
	#homeNavBar{
		height: 44px;
		background-color: white;
		/* margin-bottom: 5px; */
		
	}
	ul{
		display: flex;
		flex-direction: row;
		color: gray;
	}
	ul li {
		display: flex;
		flex: 1;
		justify-content: center;
		height: 44px;
		line-height: 44px;
		
	}
	.active{
		color: red;
		border-bottom: 2px solid red;
	}
	.lastSlected{
		color: red;
		border-bottom: 2px solid red;
	}
</style>