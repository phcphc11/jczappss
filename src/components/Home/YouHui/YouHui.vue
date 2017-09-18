<template>
	<div id="youhui">
		<ul>
			<li v-for="item in dataList">
				<Cell v-bind:CellItem="item"></Cell>
			</li>
		</ul>
	</div>
</template>

<script>
import Cell from '@/components/commons/Cell'
	export default{
		components:{
			Cell,
		},
		data(){
			return {
				dataList:[]
			}
		},
		activated(){
			var _this=this;
			this.$http.get('/api/YouHui').then(function (response){
				response=response.data;
				if (response.errno==0) {
					_this.dataList=response.data.data;
					// console.log(_this.dataList)
				}
			})
		}
	}
</script>

<style>
	#youhui ul{
		display: flex;
		flex-direction: column;
	}
</style>