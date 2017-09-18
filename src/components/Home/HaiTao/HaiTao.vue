<template>
	<div id="haitao">
		<ul>
			<li v-for="item in dataSource">
				<Cell v-bind:CellItem="item"></Cell>
			</li>
		</ul>
	</div>
</template>

<script>
import Cell from "@/components/commons/Cell"
	export default{
		components:{
			Cell,
		},
		data(){
			return{
				dataSource:[]
			}
		},
		activated(){
			var _this=this;
			this.$http.get('/api/HaiTao').then(function (response){
				response=response.data;
				// console.log(response);
				if (response.errno==0) {
					_this.dataSource=response.data.data;
					// console.log(_this.dataSource)
				}
			})
		}
	}
</script>

<style>
	#haitao ul {
		display: flex;
		flex-direction: column;
	}
</style>