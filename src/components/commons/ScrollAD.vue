<template>

      <!-- swiper -->
      <swiper :options="swiperOption" class="swiper">
        <swiper-slide v-for="item in adsArray">
            <img v-bind:src=item.imageUrl alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

</template>

<script>
  export default {
  	data() {
  	  return {
    		swiperOption: {
    		  pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          paginationClickable: true,
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: 2500,
          autoplayDisableOnInteraction: false
    		},
         adsArray: []
  	  }
  	},

    activated(){
        var _this=this;
        this.$http.get(window.apiAddress+'/api/tarbar').then(function(response){
          response=response.data;
          
          _this.dataList=response.data.ads;
          console.log(_this.dataList);
        })
        .catch(function(error){
          console.log(error)
        })
    },

    
    created(){
        var _this=this;//保留ScrollAD的组件this
       this.$http.get('/api/GuangGao').then(function(response){
            response=response.data;

            if (response.errno==0) {
                _this.adsArray=response.data.focus;
                
            }
       })
    }
  }
</script>

<style type="text/css">
    .swiper{
      height: 150px;
      background-color: cyan;
      margin-bottom: 5px;
    }
</style>