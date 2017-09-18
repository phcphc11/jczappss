<template>
	
</template>
<script type="text/javascript">
	export default{
		filterFunc(val,bigLength,midlength,smallLength){
			//获取屏幕宽度
			const screenWidth = window.screen.width;
			if (val.length>10) {
				if (screenWidth>=768) {
					return val.substring(0,bigLength)+"...";
				}else if(screenWidth<=320){
					return val.substring(0,smallLength)+"...";
				}else{
					return val.substring(0,midlength)+"..."
				}
			}else{
				return val;
			}
		},

		filterShowDate(val){
			//获取json时间
			let data = new Date();
			let years=data.getYear();
			let month=data.getMnoth();
			let day=data.getDate();
			let hours=data.getHours();
			let minutes=data.getMinutes();

			//获取实时时间
			let currentData=new Date();
			let currentYears=current.getYear();
			let currentMonth=currentData.getMnoth();
			let currentDay=currentData.getDate();
			if (years==currentYears && month==currentMonth && day==currentDay) {
				return hours+':'+minutes;
			}else{
				return month+'-'+day;
			}
		}
	}
</script>