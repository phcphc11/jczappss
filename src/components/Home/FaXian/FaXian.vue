<template>
	<div id="faxian">
		<ul>
			<li v-for="item in datalist">
				<img :src=item.cover alt="">
				<span class="title">{{item.title | showTitle}}</span>
				<span style="color:red">{{item.price}}</span>
				<span style="font-size:10px">{{item.mallName}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
import filterComponent from '@/components/commons/filterComponent'
	export default{

		data(){
			return{
				datalist:[],
			}
		},	

		activated(){
			var _this=this;
			this.$http.get('/api/FaXian').then(function(response){
				response=response.data;
				if (response.errno==0) {
					_this.datalist=response.data.data;
					// console.log(_this.datalist)
				}
			})
		},

		filters:{
			showTitle(val){
				return filterComponent.filterFunc(val,20,15,10);
			}
		}
	}


</script>

<style>
	#faxian ul {
		display: flex;
		flex-wrap: wrap;
	}
	#faxian ul li{
		width: 50%;
		color: gray;
		display: flex;
		flex-direction: column;
		padding: 5px;
		margin-bottom: 1px;
		background-color: white;
	}
	
</style>