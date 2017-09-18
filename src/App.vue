<template>
  <div id="app">
      <Tabbar></Tabbar>
      <router-view></router-view>
  </div>
</template>

<script>
import Tabbar from '@/components/commons/Tabbar.vue'
export default {
  name: 'app',
  components:{
    Tabbar,
  }
}
</script>

<style>
@import url(./assets/reset.css);
#app {
  background-color: lightgray;
}
</style>
