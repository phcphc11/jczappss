<template>
	<div id="tabbar">
		<ul>

			<router-link to="/home"><li>首页</li></router-link>
			<router-link to="/category"><li>分类</li></router-link>
			<router-link to="/profile"><li>我的</li></router-link>

		</ul>
	</div>
</template>

<script type="text/javascript">
	
</script>


<!-- 使用sass -->
<style >
	#tabbar{
		background:cyan;
		height:44px;
		width:100%;
		position:fixed;
		bottom:0px;
	}	
	ul{
		display:flex;
		flex-direction: row;		
	}

	a{
		flex:1;
		display: flex;
		justify-content: center;
		height: 44px;
		line-height: 44px;
		font-size: 18px;
		color: black;
	}
	
</style>