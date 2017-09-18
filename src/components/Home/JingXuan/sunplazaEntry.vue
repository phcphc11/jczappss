<template>
	<div id="spe">
		<div class="column">
			<ul>
				<li v-for="(item,index) in sunES" v-if="index<2">
					<img v-bind:src=item.icon alt="">
				</li>
			</ul>
		</div>
		<div class="column">
			<ul>
				<li v-for="(item,index) in sunES" v-if="index>=2">
					<img v-bind:src=item.icon alt="">
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		props:['sunES'],

	}
</script>

<style>
	#spe{
		display: flex;
		flex-direction: column;
		background-color: white;
		margin-bottom: 5px;
	}
	#spe ul {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	#spe ul li {		
			padding: 5px;
	}
</style>