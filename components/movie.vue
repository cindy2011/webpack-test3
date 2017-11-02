<template>
   <div>
  	我是电影<br>
  	<router-link :to="{name:'movie_guochan'}">国产电影</router-link>
  	<router-link :to="{name:'movie_oumei'}">欧美电影 </router-link>
  	<router-view></router-view>
  </div> 
</template>
<script>
export default{
	data(){
		return {}
	}
}
</script>
<style>
</style>