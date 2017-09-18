<template>
	<div id="cell">
		<div class="cellLeft">
			<img :src=CellItem.cover alt="">
		</div>
		<div class="cellRight">
			<span>{{CellItem.title | priceLength}}</span>
			<span style="color:red">{{CellItem.price}}</span>
			<span>
				<span>{{CellItem.mallName | priceLength }}</span>
				<span>{{CellItem.pubDate | pubdata}}</span>
				<span>3</span>
			</span>
		</div>
	</div>
</template>

<script>
	export default{
		props:['CellItem'],
		filters:{
			priceLength(val){
				/*获取屏幕像素window.screen.width
					如果屏幕像素宽度大于等于768,获取
				*/
				const screenWidth = window.screen.width;
				if (val.length>10) {
					if (screenWidth>=758) {
						return val.substring(0, 20)+'...';
					}else if(screenWidth<=320){
						return val.substring(0, 10)+"...";
					}else{
						return val.substring(0, 15)+"...";
					}	
				}else{
					return val;
				}
			},
			pubdata(val){
				//获取json文件中的时间
				let data=new Date(val);
				let month=data.getMonth();
				let day=data.getDate();
				let hours=data.getHours();
				let Minutes=data.getMinutes();
				//获取实时的时间数据
				let currentData=new Date();
				let currentMonth=currentData.getMonth();
				let currentday=currentData.getDate();
				//判断json数据和实时数据,相等则显示时间,否则显示日期
				if (day==currentday && month==currentMonth) {
					return hours+':'+Minutes;
				}else{
					return month+"-"+day
				}

			},

		}
	}
</script>

<style>
	#cell{
		display: flex;
		flex-direction: rows;
		margin-bottom: 1px;
		background-color: white;
		height: 200px;
	}
	#cell .cellLeft{
		width: 45%;
		display: flex;
		padding: 10px
	}
	#cell .cellRight{
		width: 55%;
		padding-top: 10px;
		padding-bottom: 10px;
		display: flex;
		flex-direction: column;
		color: gray;
	}
	#cell .cellRight span:nth-of-type(1){
		flex: 2;
		flex-direction: row;
		display: flex;
	}
	#cell .cellRight span:nth-of-type(2){
		flex: 2;
		display: flex;
	}
	#cell .cellRight span:nth-of-type(3){
		flex: 1;
		flex-direction: row;
		display: flex;
	}
	#cell .cellRight span:nth-of-type(3) span{
		display: flex;
		flex: 1;
		justify-content: center;
	}
</style>