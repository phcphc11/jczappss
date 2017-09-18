<template>
	<div id="jingxuan">
		<sunplazaEntry v-bind:sunES="sunES"></sunplazaEntry>
		<ul>
			<li v-for="item in listIndex">
				<Cell v-bind:CellItem="item.value"></Cell>
			</li>
		</ul>
	</div>
</template>

<script>
import sunplazaEntry from './sunplazaEntry'
import Cell from '@/components/commons/Cell'

	export default{
		components:{
			sunplazaEntry,
			Cell,
		},
		data(){
			return{
				sunES:[],//sunplazaEntrys数据
				listIndex:[],
			}
		},
		activated(){
			var _this=this;
			this.$http.get('/api/JingXuan').then(function (response){
				response=response.data;
				if (response.errno==0) {
					_this.sunES=response.data.sunplazaEntrys;
					_this.listIndex=response.data.listIndex;
					// console.log(_this.listIndex)
				}
			})
		}
	}
</script>

<style>
	#jingxuan ul{
		display: flex;
		flex-direction: column;
	}
</style>
