<template>
	<div id="yuanchuang">
		<Cell v-bind:datalist="datalist"></Cell>
	</div>
</template>

<script>
import Cell from './YuanChuangCell'
	export default{
		components:{
			Cell,
		},
		data(){
			return{
				datalist:[],
			}
		},
		
		activated(){
			var _this=this;
			this.$http.get('/api/YuanChuang').then(function(response){
				response=response.data;
				if (response.errno==0) {
					_this.datalist=response.data.data;
					
				}
			})
		}
	}
</script>

<style>
	#yuanchuang ul {
		display: flex;
		flex-direction: column;
	}
</style>