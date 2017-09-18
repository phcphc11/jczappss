<template>
	<div id="cell">
		<ul>
			<li v-for="item in datalist">
				<div class="img">
					<img :src=item.hdCover alt="">
				</div>

		
					<div class="intro">
						<div class="introLeft">	
							{{item.pubDate | getDate}}
						</div>

						<div class="introRight">
							<span>{{item.title}}</span>
							<span>{{item.synopsis | getSynopsis}}</span>
							<span>
								<span style="font-size:10px">{{item.createName}}</span>
								<span></span>
								<span></span>
							</span>
						</div>
					</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props:['datalist'],
		filters:{
			getDate(val){
				//转换成时间对象
				var pubDate=new Date(val).toString();
				var pubDateArr = pubDate.split(' ');
				return pubDateArr[2];
				if (parseInt(pubDateArr[2])<10) {
					return pubDateArr[2].slice(1,2);
				}
			},
			getSynopsis(val){
				return val.slice(0,36)+'..'
			}
		}
	}
</script>

<style scoped>
	#cell li{
		margin-bottom: 5px;
		background-color: white;
	}
	.img {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.intro{
		display: flex;
		min-height: 140px;
		padding-top: 5px;
		/* flex-direction: row; */
	}
	.intro .introLeft{
		width: 15%;
		color: orange;
		display: flex;
		justify-content: center;
	}
	.intro .introRight{
		width: 85%;
		display: flex;
		flex-direction: column;
		color: gray;
	}
	.intro .introRight>span{
		display:flex;
		flex: 1;
	
	}
	.intro .introRight>span>span{
		display: flex;
		flex: 1;
		align-items: center;
	}
</style>